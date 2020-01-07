import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { title } from './heading.stories';

describe('heading.js', () => {
  it('renders component', () => {
    const tree = renderer
      .create(title())
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders title', () => {
    const wrapper = shallow(title());
    const wrapperTitle = title().props.children.props.title;

    expect(wrapper.html()).toContain(wrapperTitle);
  });
});
