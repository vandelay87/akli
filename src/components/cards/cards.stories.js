import React from 'react';
import { object } from '@storybook/addon-knobs';
import Cards from './cards';
import { cardMock, cardWithSubtitleMock, cardsWithImageMock, cardWithLinkMock } from '../../../__mocks__/cards-mock';

export default {
  component: Cards,
  title: 'Cards',
};

export const card = () => {
  const knob = object('Card', cardMock);

  return <Cards list={knob} />;
};

export const cardWithSubtitle = () => {
  const knob = object('Card', cardWithSubtitleMock);

  return <Cards list={knob} />;
};

export const cardsWithImage = () => {
  const knob = object('Cards', cardsWithImageMock);

  return <Cards list={knob} />;
};

export const cardWithLink = () => {
  const knob = object('Card', cardWithLinkMock);

  return <Cards list={knob} />;
};