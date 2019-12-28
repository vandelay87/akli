exports.createPageStructure = (edges) => {
  const pages = [];

  edges.forEach(({ node: { id, slug } }) => {
    pages.push({ slug, id });
  });

  return pages;
};
