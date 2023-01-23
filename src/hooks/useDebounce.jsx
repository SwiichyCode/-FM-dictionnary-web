import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const debouncedHandler = useCallback(
    debounce((value) => {
      setDebouncedValue(value);
    }, delay),
    [delay]
  );

  useEffect(() => {
    debouncedHandler(value);
    return () => debouncedHandler.cancel();
  }, [value, debouncedHandler]);

  return debouncedValue;
};
