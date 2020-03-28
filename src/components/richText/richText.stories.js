import React from 'react'
import { object } from '@storybook/addon-knobs'
import RichText from './richText'
import { richTextMock } from '../../../__mocks__/richText-mock'

export default {
  component: RichText,
  title: 'Rich Text',
}

export const article = () => {
  const knob = object('Content', richTextMock)

  return <RichText content={knob} />
}
