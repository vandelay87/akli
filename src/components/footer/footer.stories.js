import React from 'react'
import { object } from '@storybook/addon-knobs'
import Footer from './footer'
import { footerMock } from '../../../__mocks__/footer-mock'

export default {
  component: Footer,
  title: 'Footer',
}

export const footer = () => {
  const knob = object('Navigation', footerMock)

  return <Footer navigation={knob} />
}
