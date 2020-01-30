import { graphql } from 'gatsby';

export const query = graphql`
  fragment Cards on ContentfulCards {
    id
    list {
      id
      title
      subtitle
      description
      link
    }
  }
`;