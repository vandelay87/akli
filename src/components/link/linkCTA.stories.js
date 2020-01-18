import React from 'react';
import { text } from '@storybook/addon-knobs';
import LinkCTA from './linkCTA';

export default {
  component: LinkCTA,
  title: 'Link',
};

export const internal = () => {
  const knob = text('Title', 'click me');

  return <LinkCTA title={knob} link="/" />;
};

export const external = () => {
  const titleKnob = text('Title', 'google.com');
  const linkKnob = text('Link', 'https://www.google.com');

  return <LinkCTA title={titleKnob} link={linkKnob} external />;
};
