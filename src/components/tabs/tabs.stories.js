import React from 'react'
// import { text, boolean } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import Tabs from './tabs'

export default {
  component: Tabs,
  title: 'Tabs',
}

export const basicTabBar = () => {
  const knob = [
    {
      id: '1',
      label: 'tab 1',
      content: {
        id: 'c1',
        json: {
          content: [
            {
              content: [
                {
                  marks: [],
                  value: 'Tab 1 content',
                  nodeType: 'text',
                },
              ],
              nodeType: 'heading-2',
            },
          ],
        },
      },
    },
    {
      id: '2',
      label: 'tab 2',
      content: {
        id: 'c2',
        json: {
          content: [
            {
              content: [
                {
                  marks: [],
                  value: 'Tab 2 content',
                  nodeType: 'text',
                },
              ],
              nodeType: 'heading-2',
            },
          ],
        },
      },
    },
  ]

  return (
    <div
      style={{ border: '1px solid black', maxWidth: '500px', margin: 'auto' }}
    >
      <Tabs label="tabs" tabList={knob} />
    </div>
  )
}
