import React from 'react';
import { text } from '@storybook/addon-knobs';
import Header from './header';

export default {
  component: Header,
  title: 'Header',
};

export const header = () => {
  const knob = text('Title', 'My Website');

  return <Header title={knob} />;
};
