import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import styles from "./header.module.css";

const Header = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          firstName
          lastName
          shortDescription
          twitterUrl
          githubUrl
          portfolioUrl
        }
      }
      bioImage: file(relativePath: { eq: "daniel-johnson.jpg" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const {
    firstName,
    lastName,
    shortDescription,
    twitterUrl,
    githubUrl,
    portfolioUrl,
  } = data.site.siteMetadata;

  return (
    <header className={className}>
      <div className={styles.siteTitle}>
        <Link to="/" className={styles.siteTitleLink}>
          <span className={styles.firstName}>{firstName}</span>{" "}
          <span className={styles.lastName}>{lastName}</span>
        </Link>
      </div>

      <div className={styles.bio}>
        <Img
          className={styles.bioImage}
          fixed={data.bioImage.childImageSharp.fixed}
        />
        <div className={styles.bioInfo}>
          <div className={styles.bioInfoLine}>
            {shortDescription} /{" "}
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <button
                  className="link-button"
                  onClick={() =>
                    toggleTheme(theme === "dark" ? "light" : "dark")
                  }
                >
                  {theme === "dark"
                    ? "use light theme 😌"
                    : "use DARK theme 🥰"}
                </button>
              )}
            </ThemeToggler>
          </div>
          <div className={styles.bioInfoLine}>
            <a href={twitterUrl}>twitter</a> / <a href={githubUrl}>github</a> /{" "}
            <a href={portfolioUrl}>portfolio</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
