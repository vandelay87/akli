import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../layouts/layout';
import SectionBlock from '../layouts/sectionBlock';
import SEO from '../hooks/seo';
import componentList from '../utils/componentList';

const renderComponent = (componentType, component) => {
  const Component = componentList[componentType];
  const props = component;

  Object.keys(props).forEach(
    (key) => (props[key] == null) && delete props[key],
  );

  return <Component key={component.id} {...props} />;
};

const Page = ({ data }) => {
  const { title, description, contentBlocks } = data.contentfulPage;

  return (
    <Layout>
      <SEO title={title} description={description} />
      {contentBlocks.map(({ __typename: componentType, ...component }) => {
        if (componentType === 'ContentfulSection') {
          const section = component.section.map(
            ({ __typename: sectionType, ...props }) => renderComponent(sectionType, props),
          );

          return <SectionBlock key={component.id}>{section}</SectionBlock>;
        }

        return renderComponent(componentType, component);
      })}
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
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
          ... on ContentfulLink {
            ...Link
          }
          ... on ContentfulTable {
            ...Table
          }
          ... on ContentfulCards {
            ...Cards
          }
          ... on ContentfulFigureImage {
            ...Image
          }
          ... on ContentfulChips {
            ...Chips
          }
          ... on ContentfulTabBar {
            ...TabBar
          }
        }
        ... on ContentfulSection {
          id
          section {
            ... on Node {
              __typename
              ... on ContentfulRichText {
                ...RichText
              }
              ... on ContentfulHeading {
                ...Heading
              }
              ... on ContentfulLink {
                ...Link
              }
              ... on ContentfulTable {
                ...Table
              }
              ... on ContentfulCards {
                ...Cards
              }
              ... on ContentfulFigureImage {
                ...Image
              }
              ... on ContentfulChips {
                ...Chips
              }
              ... on ContentfulTabBar {
                ...TabBar
              }
            }
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
      contentBlocks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
      })),
    }),
  }),
};

Page.defaultProps = {
  data: {},
};

export default Page;
