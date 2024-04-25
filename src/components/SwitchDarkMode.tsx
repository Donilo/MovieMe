import { FiMoon, FiSun } from "react-icons/fi";
import NavbarButton from "./NavbarButton";
import useDarkMode from "../hooks/useDarkMode";

export default function SwitchDarkMode() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <NavbarButton onClicked={toggleDarkMode}>
      {isDark ? <FiMoon /> : <FiSun />}
    </NavbarButton>
  );
}
