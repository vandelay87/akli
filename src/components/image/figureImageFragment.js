import { graphql } from 'gatsby'

export const query = graphql`
  fragment Image on ContentfulFigureImage {
    id
    image {
      id
      title
      description
      fluid(maxWidth: 960) {
        aspectRatio
        base64
        sizes
        src
        srcSet
        srcSetWebp
        srcWebp
      }
      file {
        details {
          image {
            width
            height
          }
        }
      }
    }
    caption
    align
  }
`
