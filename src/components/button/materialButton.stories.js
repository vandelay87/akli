import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import MaterialButton from './materialButton'

export default {
  component: MaterialButton,
  title: 'Button',
}

export const basicButton = () => {
  const knob = text('Title', 'Click me')

  return <MaterialButton value={knob} click={action('button-click')} />
}

export const raisedButton = () => {
  const knob = boolean('Raised', true)

  return (
    <MaterialButton
      value="Toggle raised"
      click={action('button-click')}
      raised={knob}
    />
  )
}
