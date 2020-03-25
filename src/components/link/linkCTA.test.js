import renderer from 'react-test-renderer'
import { internal, external } from './linkCTA.stories'

describe('linkCTA.js', () => {
  it('renders component', () => {
    const internalTree = renderer.create(internal()).toJSON()
    const externalTree = renderer.create(external()).toJSON()

    expect(internalTree).toMatchSnapshot()
    expect(externalTree).toMatchSnapshot()
  })
})
