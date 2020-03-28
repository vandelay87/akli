import React from 'react'
import Tabs from './tabs'
import { tabsMock } from '../../../__mocks__/tabs-mock'

export default {
  component: Tabs,
  title: 'Tabs',
}

export const tabs = () => <Tabs label="tabs" tabList={tabsMock} />
