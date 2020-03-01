import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Chips from './chips';
import { chipsWithAction, chipsWithLink } from './chips.stories';

describe('chips.js', () => {
  it('renders component', () => {
    const chipsActionTree = renderer
      .create(chipsWithAction())
      .toJSON();
    const chipsLinkTree = renderer
      .create(chipsWithLink())
      .toJSON();

    expect(chipsActionTree).toMatchSnapshot();
    expect(chipsLinkTree).toMatchSnapshot();
  });

  it('calls function', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Chips list={[{id: '1', value: 'chip', action: mockFn}]} />);

    wrapper.find('div[role="button"]').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
    wrapper.find('div[role="button"]').simulate('keypress', {key: 'Enter'});
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('opens url', () => {
    window.open = jest.fn();
    const wrapper = mount(chipsWithLink());

    wrapper.find('div[role="button"]').first().simulate('click');
    expect(window.open).toHaveBeenCalledTimes(1);
    wrapper.find('div[role="button"]').first().simulate('keypress', {key: 'Enter'});
    expect(window.open).toHaveBeenCalledTimes(2);
  });
});
