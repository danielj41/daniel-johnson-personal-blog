import { Link } from "gatsby";
import React from "react";
import styles from "./header.module.css";

const Header = ({ className }) => (
  <header className={className}>
    <Link to="/" className={styles.siteTitle}>
      <span className={styles.firstName}>Daniel</span>{" "}
      <span className={styles.lastName}>Johnson</span>
    </Link>
    <span className={styles.subtitle}>(photo) blog with thoughts & things</span>
    <span className={styles.links}>
      <a href="/">toggle dark mode</a> / <a href="/">twitter</a> /{" "}
      <a href="/">main site</a>
    </span>
  </header>
);

export default Header;
