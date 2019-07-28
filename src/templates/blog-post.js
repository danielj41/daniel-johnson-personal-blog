import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default function BlogPost({ data }) {
  const { markdownRemark: post } = data;
  const { title, date, path } = post.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <h1 id="blog-post-title">{title}</h1>
      <div className="blog-post-date">
        <Link to={path}>{date}</Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
