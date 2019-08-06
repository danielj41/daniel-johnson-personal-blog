import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeToggleButton = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <button
        className="link-button"
        onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "use light theme 😌" : "use DARK theme 🥰"}
      </button>
    )}
  </ThemeToggler>
);

export default ThemeToggleButton;
