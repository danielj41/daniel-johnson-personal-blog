import React from "react";

import styles from "./info-block.module.css";

export default ({ children }) => (
  // .custom-block defined in typography.js
  <div className="custom-block">
    <div className={styles.infoBlock}>{children}</div>
  </div>
);
