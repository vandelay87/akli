import React from 'react';
import { object, text, select } from '@storybook/addon-knobs';
import FigureImage from './figureImage';

export default {
  component: FigureImage,
  title: 'Image',
};

const defaultValue = {
  file: {
    url: 'https://via.placeholder.com/400x225',
    details: {
      image: {
        width: 400,
        height: 225
      }
    }
  },
  description: 'An image.'
}

export const imageWithoutCaption = () => {
  const knob = object('URL', defaultValue);

  return <FigureImage image={knob} />;
};

export const imageWithCaption = () => {
  const knob = text('Caption', 'A witty anecdote concerning the crocodile in the image above.');

  return <FigureImage image={defaultValue} caption={knob} />;
};

export const imageWithContent = () => {
  const options = ['left', 'right', 'none'];
  const alignKnob = select('Align', options, 'right');
  const maxWidthKnob = text('Max width', '400');

  return (
    <>
      <FigureImage image={defaultValue} align={alignKnob} maxWidth={maxWidthKnob} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
  );
};
