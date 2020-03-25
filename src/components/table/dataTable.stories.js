import React from 'react'
import { object } from '@storybook/addon-knobs'
import DataTable from './dataTable'
import { header, rows } from '../../../__mocks__/dataTable-mock'

export default {
  component: DataTable,
  title: 'Table',
}

export const dataTable = () => {
  const defaultHeader = header
  const defaultRows = rows
  const headerKnob = object('Header', defaultHeader)
  const rowsKnob = object('Rows', defaultRows)

  return <DataTable label="Shop table" header={headerKnob} rows={rowsKnob} />
}
