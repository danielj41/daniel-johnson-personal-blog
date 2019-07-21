import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

parnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    boxShadow: "none",
    textDecoration: "underline",
  },
})

const typography = new Typography(parnassusTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
