import renderer from 'react-test-renderer'
import { switchWithLabel } from './switch.stories'

describe('switch.js', () => {
  it('renders component', () => {
    const switchTree = renderer.create(switchWithLabel()).toJSON()

    expect(switchTree).toMatchSnapshot()
  })
})
