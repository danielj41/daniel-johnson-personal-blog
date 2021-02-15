import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeToggleButton = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <button
        className="link-button"
        onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "toggle theme 🌙" : "toggle theme ☀️"}
      </button>
    )}
  </ThemeToggler>
);

export default ThemeToggleButton;
