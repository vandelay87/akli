import React from 'react';
import { object } from '@storybook/addon-knobs';
import Chips from './chips';
import { chipsWithActionMock, chipsWithLinkMock } from '../../../__mocks__/chips-mock';

export default {
  component: Chips,
  title: 'Chips',
};

export const chipsWithAction = () => {
  const knob = object('URL', chipsWithActionMock);

  return (
    <Chips list={knob} />
  );
};

export const chipsWithLink = () => (<Chips list={chipsWithLinkMock} />);