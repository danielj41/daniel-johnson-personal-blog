import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import classNames from "classnames";

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
          <span className={styles.firstName}>
            <span className={styles.circleBackground}></span>
            <span className={styles.text}>{firstName}</span>
          </span>{" "}
          <span className={styles.lastName}>
            <span className={styles.circleBackground}></span>
            <span className={styles.text}>{lastName}</span>
          </span>
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
          <div
            className={classNames(styles.bioInfoLine, styles.bioInfoLineLinks)}
          >
            <a href={twitterUrl}>Twitter</a> / <a href={githubUrl}>GitHub</a> /{" "}
            <a href={portfolioUrl}>Portfolio</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
