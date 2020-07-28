import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Switch from './switch'

export default {
  component: Switch,
  title: 'Switch',
}

export const switchWithLabel = () => {
  const checkedKnob = boolean('Checked', true)
  const labelKnob = text('Label', 'dark mode')

  return (
    <Switch
      id="switch"
      checked={checkedKnob}
      handleToggle={action('switch-toggle')}
      label={labelKnob}
    />
  )
}
