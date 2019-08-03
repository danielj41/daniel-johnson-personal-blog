import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="blog-posts">
        <h1>Recent Posts</h1>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h2>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <div className="blog-post-date">{post.frontmatter.date}</div>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default IndexPage;
