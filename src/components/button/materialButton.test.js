import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import MaterialButton from './materialButton'
import { basicButton, raisedButton } from './materialButton.stories'

describe('materialButton.js', () => {
  it('renders component', () => {
    const basicButtonTree = renderer.create(basicButton()).toJSON()
    const raisedButtonTree = renderer.create(raisedButton()).toJSON()

    expect(basicButtonTree).toMatchSnapshot()
    expect(raisedButtonTree).toMatchSnapshot()
  })

  it('calls function when clicked', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<MaterialButton value="click" click={mockFn} />)

    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
