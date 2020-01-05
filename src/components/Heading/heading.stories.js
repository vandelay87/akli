import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';
import Heading from './heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const title = () => {
  const knob = text('Title', 'Hello world');

  return (
    <div>
      <Heading title={knob} />
    </div>
  );
};

export const size = () => {
  const options = {
    range: true,
    min: 1,
    max: 6,
    step: 1,
  };
  const knob = number('Size', 2, options);

  return (
    <div>
      <Heading title={`h${knob} heading`} size={knob} />
    </div>
  );
};

export const align = () => {
  const options = ['left', 'right', 'center'];
  const knob = select('Align', options, 'right');

  return (
    <div>
      <Heading title={`${knob} align`} align={knob} />
    </div>
  );
};
