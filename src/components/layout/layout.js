import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";

const Layout = ({ children, minimal = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <>
      <Header siteTitle={title} className="site-header" minimal={minimal} />
      <div className="layout">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
