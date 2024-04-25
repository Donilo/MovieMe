import { RefObject, useEffect, useState } from "react";

const useFocusTrack = (ref: RefObject<HTMLInputElement>) => {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocus(false);
      }
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

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", focusOn);
    // to clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", focusOn);
    };
  }, [ref, isFocus]);

  return { isFocus, setIsFocus };
};

export default useFocusTrack;
