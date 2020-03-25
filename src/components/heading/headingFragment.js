import { graphql } from 'gatsby'

export const query = graphql`
  fragment Heading on ContentfulHeading {
    id
    title
    size
    align
  }
`
