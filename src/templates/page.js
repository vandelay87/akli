import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../layouts/layout';
import SEO from '../hooks/seo';
import componentList from '../utils/componentList';

const Page = ({ data }) => {
  const { title, description, contentBlocks } = data.contentfulPage;

  return (
    <Layout>
      <SEO title={title} description={description} />
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
      description
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
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      contentBlocks: PropTypes.array,
    }),
  }),
};

Page.defaultProps = {
  data: {},
};

export default Page;
