import Typography from "typography";
import parnassusTheme from "typography-theme-parnassus";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

// Make the color scheme respect dark mode (which will change these
// css variables)
const customizedParnassusTheme = {
  ...parnassusTheme,
  bodyColor: "var(--body-color)",
  headerColor: "var(--header-color)",
};

customizedParnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    // The original theme uses a box shadow to make the underline appear
    // further down, I personally prefer the standard underline.
    color: "var(--link-color)",
    boxShadow: "none",
    textDecoration: "underline",
    transition: "0.2s color",
  },
  "h1, h2, h3, h4, h5, h6": {
    // For toggling to dark mode
    transition: "0.2s color",
  },
  "a:hover, a:active": {
    textDecoration: "none",
  },
  blockquote: {
    color: "var(--blockquote-color)",
    borderColor: "var(--blockquote-border-color)",
    transition: "0.2s color, 0.2s border-color",
  },
  [MOBILE_MEDIA_QUERY]: {
    blockquote: {
      borderColor: "var(--blockquote-border-color)",
    },
  },
  // These classes are rendered by "gatsby-remark-custom-blocks"
  ".custom-block.screenshot": {
    marginTop: rhythm(2),
    marginBottom: rhythm(3),
  },
});

const typography = new Typography(customizedParnassusTheme);

export const { scale, rhythm, options } = typography;
export default typography;
