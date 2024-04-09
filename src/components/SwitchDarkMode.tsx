import { useState } from "react";
import { CgSun } from "react-icons/cg";
import { FaRegMoon } from "react-icons/fa6";
import NavbarButton from "./NavbarButton";

export default function SwitchDarkMode() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <NavbarButton onClicked={toggleDarkMode}>
      {isDark ? <FaRegMoon /> : <CgSun />}
    </NavbarButton>
  );
}
