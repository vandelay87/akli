import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ContentfulRichText from '../components/RichText/richText';

const blockList = {
  ContentfulRichText,
};

const Page = ({ data }) => {
  const page = data.contentfulPage;

  return (
    <Layout>
      {page.contentBlocks
        && page.contentBlocks.map(({ __typename: componentType, ...component }) => {
          const Component = blockList[componentType];
          return <Component key={component.id} {...component} />;
        })}
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      contentBlocks {
        ... on Node {
          __typename
          ... on ContentfulRichText {
            ...RichText
          }
        }
      }
    }
  }
`;

export default Page;
