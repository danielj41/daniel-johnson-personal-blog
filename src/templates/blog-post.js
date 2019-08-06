import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";

export default function BlogPost({
  data: { mdx },
  pageContext: { twitterSearchUrl, githubSourceUrl },
}) {
  const { frontmatter, body } = mdx;
  const { title, date, path } = frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <h1 id="blog-post-title">{title}</h1>
      <p className="blog-post-date">
        <Link to={path}>{date}</Link>
      </p>
      <MDXRenderer>{body}</MDXRenderer>
      <p className="blog-post-links">
        <Link to="/">Back to home</Link> /{" "}
        <a href={twitterSearchUrl}>Discuss on Twitter</a> /{" "}
        <a href={githubSourceUrl}>Source on GitHub</a>
      </p>
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
