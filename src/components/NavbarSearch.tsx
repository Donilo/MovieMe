import { useRef } from "react";
import useFocusTrack from "../hooks/useClickOutsideTrack";

export default function NavbarSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { isFocus, setIsFocus } = useFocusTrack(searchRef);

  return (
    <div className="mr-5 relative hidden md:block">
      <input
        ref={searchRef}
        onClick={() => setIsFocus(true)}
        id="search"
        type="search"
        className="input-behave"
        placeholder="Search..."
      />
      <button
        disabled
        className={
          isFocus
            ? "hidden"
            : `absolute top-0 right-0 mt-2 mr-2 p-1 text-xs text-gray-600 rounded-lg border border-gray-600 opacity-50`
        }
      >
        CRTL + K
      </button>
    </div>
  );
}
