import { graphql } from 'gatsby'

export const query = graphql`
  fragment Cards on ContentfulCards {
    id
    cardList {
      id
      title
      subtitle
      image {
        file {
          url
        }
      }
      description
      link
      category
    }
  }
`
