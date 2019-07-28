import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import Header from "./header";
import "./layout.css";
import "./prism-theme.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        className="site-header"
      />
      <div className="layout">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              Dark mode
            </label>
          )}
        </ThemeToggler>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  );
};

export default Layout;
