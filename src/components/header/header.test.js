import renderer from 'react-test-renderer'
import { header } from './header.stories'

describe('header.js', () => {
  it('renders component', () => {
    const tree = renderer.create(header()).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
