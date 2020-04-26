import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { robotoRegular } from '../../styles/fonts'
import { color } from '../../styles/colors'

const DataTable = ({ label, header, rows }) => (
  <StyledWrapper>
    <StyledTable label={label}>
      <StyledHead>
        <tr>
          {header.rowData.map(head => (
            <th key={head.id} role="columnheader">
              {head.value}
            </th>
          ))}
        </tr>
      </StyledHead>
      <StyledBody>
        {rows.map(row => (
          <tr key={row.id}>
            {row.rowData.map(td => (
              <StyledTableData key={td.id} numeric={td.isNumeric}>
                {td.value}
              </StyledTableData>
            ))}
          </tr>
        ))}
      </StyledBody>
    </StyledTable>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  ${robotoRegular};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow-x: auto;
  display: inline-flex;
  max-width: 100%;
`
const StyledTable = styled.table.attrs(({ label }) => ({
  'aria-label': label,
}))`
  width: 100%;
  border-collapse: collapse;
  border: 0;
  white-space: nowrap;
`
const StyledHead = styled.thead`
  background: ${color.primary};
  color: ${color.onPrimary};

  th {
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.00714em;
    text-align: left;
    padding: 16px;
  }
`
const StyledBody = styled.tbody`
  color: rgba(0, 0, 0, 0.87);

  tr {
    border-top-color: rgba(0, 0, 0, 0.12);
    border-top-width: 1px;
    border-top-style: solid;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
  }
`
const StyledTableData = styled.td`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.01786em;
  padding: 16px;
  text-align: ${({ numeric }) => (numeric ? 'right' : 'left')};
`

DataTable.propTypes = {
  label: PropTypes.string.isRequired,
  header: PropTypes.shape({
    rowData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
      })
    ),
  }).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rowData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          isNumeric: PropTypes.bool,
          value: PropTypes.string,
        })
      ),
    })
  ).isRequired,
}

export default DataTable
