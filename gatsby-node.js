const path = require('path');
const { createPageStructure } = require('./src/utils/createPageStructure');

exports.createPages = ({ graphql, actions }) => {
  const pageTemplate = path.resolve('src/templates/page.js');

  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const pages = createPageStructure(result.data.allContentfulPage.edges);
    pages.forEach((page) => {
      actions.createPage({
        path: page.slug,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      });
    });
  });
};
