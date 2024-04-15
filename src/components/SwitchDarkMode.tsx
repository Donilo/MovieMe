import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import NavbarButton from "./NavbarButton";

export default function SwitchDarkMode() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <NavbarButton onClicked={toggleDarkMode}>
      {isDark ? <FiMoon /> : <FiSun />}
    </NavbarButton>
  );
}
