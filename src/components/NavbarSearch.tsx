import { useState, useRef, useEffect, RefObject } from "react";

export default function NavbarSearch() {
  const [isFocus, setIsFocus] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  function useClickOutsideTrack(ref: RefObject<HTMLInputElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsFocus(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      // to clean up
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function focusOn(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      const search = document.querySelector("#search");
      (search as HTMLElement).focus();
      setIsFocus(true);
      if (isFocus) {
        document.removeEventListener("keydown", focusOn);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", focusOn);
    // clean up
    return () => document.removeEventListener("keydown", focusOn);
  }, []);

  useClickOutsideTrack(searchRef);

  return (
    <div className="mr-5 relative hidden md:block">
      <input
        ref={searchRef}
        onClick={(event) => {
          event.target.addEventListener("click", () => {
            setIsFocus(true);
          });
        }}
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
