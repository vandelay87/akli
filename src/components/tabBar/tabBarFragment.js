import { graphql } from 'gatsby';

export const query = graphql`
  fragment TabBar on ContentfulTabBar {
    id
    tabs {
      id
      label
      content {
        id
        json
      }
    }
  } 
`;