import renderer from 'react-test-renderer';
import { dataTable } from './dataTable.stories';

describe('dataTable.js', () => {
  it('renders component', () => {
    const tree = renderer
      .create(dataTable())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
