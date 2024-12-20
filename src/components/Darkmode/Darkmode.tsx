import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update the theme in the HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [isDarkMode]);

  return (
      <div className="text-center">
        <button
          className="bg-transparent after:bg-transparent dark:bg-transparent transition-all duration-300 border-none dark:border-none outline-none"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.5)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {
            isDarkMode ? <IoSunny  /> : <IoMoon />
          }
        </button>
      </div>
  );
};

export default ThemeToggle;
