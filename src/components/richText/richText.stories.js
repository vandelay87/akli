import React from 'react';
import { object } from '@storybook/addon-knobs';
import RichText from './richText';

export default {
  component: RichText,
  title: 'Rich Text',
};

export const article = () => {
  const defaultValue = {
    json: {
      content: [{
        content: [{
          marks: [],
          value: 'Lorem Ipsum',
          nodeType: 'text',
        }],
        nodeType: 'heading-2',
      },
      {
        content: [{
          marks: [],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          nodeType: 'text',
        }],
        nodeType: 'paragraph',
      }],
    },
    nodeType: 'document',
  };
  const knob = object('Article', defaultValue);

  return <RichText article={knob} />;
};
