const path = require("path");

/**
 * Creates a page for each markdown blog post file in src/pages/.
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  for (const { node } of result.data.allMdx.edges) {
    if (!node.frontmatter.path) {
      // Some blog posts are split into multiple mdx files--only the
      // top-level one will have a `path` frontmatter attribute.
      continue;
    }

    createPage({
      path: node.frontmatter.path,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {},
    });
  }
};
