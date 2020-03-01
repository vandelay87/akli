import React from 'react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Chips from './chips';
import { chipsWithLinkMock } from '../../../__mocks__/chips-mock';

export default {
  component: Chips,
  title: 'Chips',
};

export const chipsWithAction = () => {
  const knob = object('URL', [{
    id: '1',
    value: 'Small',
    action: action('small-click'),
  },{
    id: '2',
    value: 'Medium',
    action: action('medium-click'),
  },{
    id: '3',
    value: 'Large',
    action: action('large-click'),
  }]);

  return (
    <Chips list={knob} />
  );
};

export const chipsWithLink = () => (<Chips list={chipsWithLinkMock} />);