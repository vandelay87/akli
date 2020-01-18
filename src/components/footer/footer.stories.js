import React from 'react';
import { object } from '@storybook/addon-knobs';
import Footer from './footer';

export default {
  component: Footer,
  title: 'Footer',
};

export const footer = () => {
  const defaultValue = [
    {
      id: '1',
      title: 'Home',
      link: '/',
    },
    {
      id: '2',
      title: 'Google',
      link: 'https://www.google.com',
      external: true,
    },
  ];
  const knob = object('Navigation', defaultValue);

  return <Footer navigation={knob} />;
};
