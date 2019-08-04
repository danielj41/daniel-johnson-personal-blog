import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";

export default function BlogPost({ data: { mdx } }) {
  const { title, date, path } = mdx.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <h1 id="blog-post-title">{title}</h1>
      <div className="blog-post-date">
        <Link to={path}>{date}</Link>
      </div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
