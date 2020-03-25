import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import {
  card,
  cardWithSubtitle,
  cardsWithImage,
  cardWithLink,
} from './cards.stories'

describe('cards.js', () => {
  it('renders component', () => {
    const cardTree = renderer.create(card()).toJSON()
    const cardWithSubtitleTree = renderer.create(cardWithSubtitle()).toJSON()
    const cardsWithImageTree = renderer.create(cardsWithImage()).toJSON()
    const cardWithLinkTree = renderer.create(cardWithLink()).toJSON()

    expect(cardTree).toMatchSnapshot()
    expect(cardWithSubtitleTree).toMatchSnapshot()
    expect(cardsWithImageTree).toMatchSnapshot()
    expect(cardWithLinkTree).toMatchSnapshot()
  })

  it('opens url when clicked', () => {
    window.open = jest.fn()
    const wrapper = mount(cardWithLink())

    wrapper.find('MaterialButton').simulate('click')
    expect(window.open).toHaveBeenCalledTimes(1)
  })
})
