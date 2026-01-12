/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import "./styles.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored) {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : "light";

      setTheme(systemTheme);
      document.documentElement.dataset.theme = systemTheme;
    }
  });

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="button--ghost theme-toggle"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
