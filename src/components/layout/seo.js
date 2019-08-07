import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang = "en", meta = [], title = "", image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            rootUrl
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...(image
          ? [
              {
                property: `og:image`,
                content: `${site.siteMetadata.rootUrl}${image}`,
              },
              {
                property: `twitter:image`,
                content: `${site.siteMetadata.rootUrl}${image}`,
              },
            ]
          : []),
      ].concat(meta)}
    />
  );
}

export default SEO;
