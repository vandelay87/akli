import { graphql } from 'gatsby'

export const query = graphql`
  fragment Tabs on ContentfulTabs {
    id
    label
    tabList {
      id
      label
      content {
        id
        json
      }
    }
  } 
`