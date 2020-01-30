import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';
import Heading from './heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const title = () => {
  const knob = text('Title', 'Hello world');

  return <Heading title={knob} />;
};

export const size = () => {
  const options = {
    range: true,
    min: 1,
    max: 6,
    step: 1,
  };
  const knob = number('Size', 3, options);

  return <Heading title={`h${knob} heading`} size={knob} />;
};

export const align = () => {
  const options = ['left', 'right', 'center'];
  const knob = select('Align', options, 'center');

  return <Heading title={`${knob} align`} align={knob} />;
};
