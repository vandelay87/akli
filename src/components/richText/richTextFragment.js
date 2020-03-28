import { graphql } from 'gatsby'

export const query = graphql`
  fragment RichText on ContentfulRichText {
    id
    content {
      json
    }
  }
`
