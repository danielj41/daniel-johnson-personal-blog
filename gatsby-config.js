module.exports = {
  siteMetadata: {
    title: "Daniel Johnson's personal blog",
    description: "thoughts about software development and javascript",
    author: "Daniel Johnson",
    firstName: "Daniel",
    lastName: "Johnson",
    shortDescription: "daniel's blog with thoughts & things",
    twitterUrl: "https://twitter.com/daniel00johnson",
    githubUrl: "https://github.com/danielj41",
    portfolioUrl: "https://danieljohnson.io",
  },
  plugins: [
    // metadata plugins
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Daniel Johnson's personal blog",
        short_name: "Daniel Johnson",
        start_url: "/",
        background_color: "#d5f0f8",
        theme_color: "#dbf8dd",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",

    // performance plugins
    "gatsby-plugin-catch-links",

    // styling plugins
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },

    // markdown blog post plugins
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-copy-linked-files",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        plugins: [
          {
            // duplicated by gatsbyRemarkPlugins
            // workaround https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 760,
              backgroundColor: "var(--body-background-color)",
            },
          },
          {
            // duplicated by gatsbyRemarkPlugins
            // workaround https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "autolink-header",
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 760,
              backgroundColor: "var(--body-background-color)",
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "autolink-header",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
        ],
      },
    },
  ],
};
