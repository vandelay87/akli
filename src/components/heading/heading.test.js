import renderer from 'react-test-renderer';
import { title, size, align } from './heading.stories';

describe('heading.js', () => {
  it('renders component', () => {
    const titleTree = renderer
      .create(title())
      .toJSON();
    const sizeTree = renderer
      .create(size())
      .toJSON();
    const alignTree = renderer
      .create(align())
      .toJSON();

    expect(titleTree).toMatchSnapshot();
    expect(sizeTree).toMatchSnapshot();
    expect(alignTree).toMatchSnapshot();
  });
});
