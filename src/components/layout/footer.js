import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      something ↻ {new Date().getFullYear()} ??
    </footer>
  );
};

export default Footer;
