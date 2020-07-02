import { graphql } from 'gatsby'

export const query = graphql`
  fragment Link on ContentfulLink {
    id
    title
    link
    external
  }
`
