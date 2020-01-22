import { graphql } from 'gatsby';

export const query = graphql`
  fragment Table on ContentfulTable {
    id
    label
    header {
        rowData {
            id
            isNumeric
            data {
                id
                data
            }
        }
    }
    rows {
        id
        rowData {
            id
            isNumeric
            data {
                id
                data
            }
        }
    }
  }
`;
