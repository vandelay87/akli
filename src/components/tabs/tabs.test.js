import React from 'react'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Tabs from './tabs'
import { tabs } from './tabs.stories'
import { tabsMock } from '../../../__mocks__/tabs-mock'

describe('tabs.js', () => {
  it('renders component', () => {
    const tree = renderer.create(tabs()).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('sets selected tab', () => {
    const wrapper = mount(<Tabs label="tabs" tabList={tabsMock} />)
    let tabNodes = wrapper.find('button[role="tab"]')
    let tabpanelNodes = wrapper.find('div[role="tabpanel"]')

    expect(tabNodes.at(0).prop('aria-selected')).toBe(true)
    expect(tabNodes.at(1).prop('aria-selected')).toBe(false)
    expect(tabpanelNodes.at(0).prop('aria-hidden')).toBe(false)
    expect(tabpanelNodes.at(1).prop('aria-hidden')).toBe(true)

    act(() => {
      tabNodes.at(1).prop('onClick')()
    })
    wrapper.setProps()
    tabNodes = wrapper.find('button[role="tab"]')
    tabpanelNodes = wrapper.find('div[role="tabpanel"]')

    expect(tabNodes.at(1).prop('aria-selected')).toBe(true)
    expect(tabNodes.at(0).prop('aria-selected')).toBe(false)
    expect(tabpanelNodes.at(1).prop('aria-hidden')).toBe(false)
    expect(tabpanelNodes.at(0).prop('aria-hidden')).toBe(true)
  })

  it('sets focused tab', () => {
    const wrapper = mount(<Tabs label="tabs" tabList={tabsMock} />)
    let tabNodes = wrapper.find('button[role="tab"]')

    function handleOnKeyDown(keypress, index) {
      act(() => {
        tabNodes.at(index).prop('onKeyDown')({ key: keypress })
      })
      wrapper.setProps()
      tabNodes = wrapper.find('button[role="tab"]')
    }

    expect(tabNodes.at(0).prop('tabIndex')).toBe(0)
    expect(tabNodes.at(1).prop('tabIndex')).toBe(-1)

    handleOnKeyDown('ArrowRight', 0)
    expect(tabNodes.at(0).prop('tabIndex')).toBe(-1)
    expect(tabNodes.at(1).prop('tabIndex')).toBe(0)

    handleOnKeyDown('ArrowLeft', 1)
    expect(tabNodes.at(0).prop('tabIndex')).toBe(0)
    expect(tabNodes.at(1).prop('tabIndex')).toBe(-1)

    handleOnKeyDown('ArrowLeft', 0)
    expect(tabNodes.at(0).prop('tabIndex')).toBe(-1)
    expect(tabNodes.at(tabsMock.length - 1).prop('tabIndex')).toBe(0)

    handleOnKeyDown('ArrowRight', tabsMock.length - 1)
    expect(tabNodes.at(tabsMock.length - 1).prop('tabIndex')).toBe(-1)
    expect(tabNodes.at(0).prop('tabIndex')).toBe(0)
  })
})
