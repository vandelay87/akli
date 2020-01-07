import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../layouts/layout';
import componentList from '../utils/componentList';

const Page = ({ data }) => {
  const { contentBlocks } = data.contentfulPage;

  return (
    <Layout>
      {contentBlocks.map(({ __typename: componentType, ...component }) => {
        const Component = componentList[componentType];
        const cleanProps = component;
        Object.keys(cleanProps).forEach(
          (key) => (cleanProps[key] == null) && delete cleanProps[key],
        );

        return <Component key={cleanProps.id} {...cleanProps} />;
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
          ... on ContentfulHeading {
            ...Heading
          }
        }
      }
    }
  }
`;

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.shape({
      contentBlocks: PropTypes.array,
    }),
  }),
};

Page.defaultProps = {
  data: {},
};

export default Page;
