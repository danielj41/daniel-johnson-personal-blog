import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import ThemeToggleButton from "../components/layout/theme-toggle-button";

import styles from "./blog-post.module.css";
import "./prism-theme.css";

export default function BlogPost({
  data: { mdx },
  pageContext: { twitterSearchUrl, githubSourceUrl, githubIssueUrl },
}) {
  const { frontmatter, body } = mdx;
  const { title, date, description, image, path, tweet } = frontmatter;

  return (
    <Layout minimal>
      <div className={styles.blogPost}>
        <SEO
          title={title}
          description={description}
          image={image && image.childImageSharp.fixed.src}
          path={path}
        />
        <h1 id="blog-post-title">{title}</h1>
        <p className={styles.blogPostDate}>
          <Link to={path}>{date}</Link> / <ThemeToggleButton />
        </p>
        <MDXRenderer>{body}</MDXRenderer>
        <p className={styles.blogPostLinks}>
          <Link to="/">Back to home</Link> /{" "}
          <a href={tweet || twitterSearchUrl}>Discuss on Twitter</a> /{" "}
          <a href={githubSourceUrl}>Source on GitHub</a> /{" "}
          <a href={githubIssueUrl}>Report inaccuracy</a>
        </p>
      </div>
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
        description
        tweet
        image {
          childImageSharp {
            fixed(width: 760) {
              src
            }
          }
        }
      }
    }
  }
`;
