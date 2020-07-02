import React from 'react'
import { text } from '@storybook/addon-knobs'
import Link from './link'

export default {
  component: Link,
  title: 'Link',
}

export const internal = () => {
  const knob = text('Title', 'click me')

  return <Link title={knob} link="/" />
}

export const external = () => {
  const titleKnob = text('Title', 'google.com')
  const linkKnob = text('Link', 'https://www.google.com')

  return <Link title={titleKnob} link={linkKnob} external />
}
