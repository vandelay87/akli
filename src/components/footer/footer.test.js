import renderer from 'react-test-renderer';
import { footer } from './footer.stories';

describe('footer.js', () => {
  it('renders component', () => {
    const tree = renderer
      .create(footer())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
