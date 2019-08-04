import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./footer.module.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterUrl
          githubUrl
          portfolioUrl
        }
      }
    }
  `);

  const { twitterUrl, githubUrl, portfolioUrl } = data.site.siteMetadata;

  return (
    <footer className={styles.footer}>
      something ↻ {new Date().getFullYear()} ?? /{" "}
      <a href={twitterUrl}>twitter</a> / <a href={githubUrl}>github</a> /{" "}
      <a href={portfolioUrl}>portfolio</a>
    </footer>
  );
};

export default Footer;
