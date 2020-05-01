import { graphql } from 'gatsby'

export const query = graphql`
  fragment Chips on ContentfulChips {
    id
    list {
      id
      value
      link
      category
    }
  }
`
