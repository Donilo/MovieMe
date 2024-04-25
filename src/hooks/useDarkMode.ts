import { useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return { isDark, setIsDark, toggleDarkMode };
};

export default useDarkMode;
