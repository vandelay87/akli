import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
  const page = data.contentfulPage;

  return (
    <div>
      <p>
        {`The page is: ${page.title}!`}
      </p>
    </div>
  );
};

export const query = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
    }
  }
`;

export default Page;
