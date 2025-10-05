import { useEffect, useState } from "react";
import classes from "@/styles/button.module.css";
export default function ThemeToggle({ size }: { size: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={classes["btn-icon"]}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <svg
          viewBox="0 0 1024 1024"
          className={`${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M835.84 387.84c0-156.16-125.44-281.6-281.6-281.6s-281.6 125.44-281.6 281.6c0 108.8 62.72 204.8 153.6 250.88v209.92c0 14.08 11.52 25.6 25.6 25.6h204.8c14.08 0 25.6-11.52 25.6-25.6V638.72c92.16-46.08 153.6-140.8 153.6-250.88z"
            fill="#FFD700"
          />
          <path
            d="M656.64 887.04h-204.8c-21.76 0-38.4-16.64-38.4-38.4V646.4c-94.72-51.2-153.6-149.76-153.6-258.56 0-162.56 131.84-294.4 294.4-294.4s294.4 131.84 294.4 294.4c0 108.8-58.88 207.36-153.6 258.56v202.24c0 21.76-16.64 38.4-38.4 38.4z"
            fill="#FFD700"
          />
          <path
            d="M682.24 848.64c0 14.08-11.52 25.6-25.6 25.6h-204.8c-14.08 0-25.6-11.52-25.6-25.6v-102.4c0-14.08 11.52-25.6 25.6-25.6h204.8c14.08 0 25.6 11.52 25.6 25.6v102.4z"
            fill="#C89005"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className={`${size}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M12,2A7,7,0,0,0,8,14.74V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14.74A7,7,0,0,0,12,2ZM9,21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V20H9Z" />
        </svg>
      )}
    </button>
  );
}
