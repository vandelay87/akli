import { graphql } from 'gatsby'

export const query = graphql`
  fragment Header on ContentfulWebsiteSettings {
    header {
      title
    }
  }
`
