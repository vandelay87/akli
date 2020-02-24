import React from 'react';
import { text } from '@storybook/addon-knobs';
import MaterialButton from './materialButton';

export default {
  component: MaterialButton,
  title: 'Button',
};

export const basicButton = () => {
  const knob = text('Title', 'Click me');

  return <MaterialButton value={knob} click={() => {console.log('click!')}} />;
};