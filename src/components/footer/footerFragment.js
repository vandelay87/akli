import { graphql } from 'gatsby'

export const query = graphql`
  fragment Footer on ContentfulWebsiteSettings {
    footer {
      navigation {
        ...Link
      }
    }
  }
`
