import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <Link to="/" className="site-title">
      <span className="first-name">Daniel</span>{" "}
      <span className="last-name">Johnson</span>
    </Link>
    <br />
    <br />
    <span className="subtitle">(photo) blog with thoughts & things</span>
    <br />
    <a href="#">toggle dark mode</a> / <a href="#">twitter</a> /{" "}
    <a href="#">main site</a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
