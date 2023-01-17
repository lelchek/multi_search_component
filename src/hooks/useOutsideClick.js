import  { useEffect, useCallback } from "react";

export const useOutsideClick = (ref, handler) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedHandler = useCallback(handler, []);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, memoizedHandler]);

  return null;
};
