import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const customizedParnassusTheme = {
  ...parnassusTheme,
  bodyColor: "var(--body-color)",
  headerColor: "var(--header-color)",
}

customizedParnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: "var(--link-color)",
    boxShadow: "none",
    textDecoration: "underline",
  },
  "a:hover, a:active": {
    textDecoration: "none",
  },
  blockquote: {
    color: "var(--blockquote-color)",
    borderColor: "var(--blockquote-border-color)",
  },
  [MOBILE_MEDIA_QUERY]: {
    blockquote: {
      borderColor: "var(--blockquote-border-color)",
    },
  },
})

const typography = new Typography(customizedParnassusTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
