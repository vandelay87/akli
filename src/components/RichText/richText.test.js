import React from 'react';
import renderer from 'react-test-renderer';
import { article } from './richText.stories';

describe('richText.js', () => {
  it('renders component', () => {
    const tree = renderer
      .create(article())
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
