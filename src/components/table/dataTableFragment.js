import { graphql } from 'gatsby'

export const query = graphql`
  fragment Table on ContentfulTable {
    id
    label
    header {
      rowData {
        id
        isNumeric
        value
      }
    }
    rows {
      id
      rowData {
        id
        isNumeric
        value
      }
    }
  }
`
