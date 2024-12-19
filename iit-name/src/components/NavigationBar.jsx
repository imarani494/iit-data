import React, { useState } from "react";
import "../styles/layout.css";

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <header className="navigation-bar">
      <h1 className="app-title">YouTube</h1>
      <button className="toggle-theme" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default NavigationBar;
