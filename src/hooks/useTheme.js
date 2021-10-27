import React from "react";
import { getFromLocalStorage, setToLocalStorage } from "./../utils/util";

function useTheme(initialValue) {
  const [state, setState] = React.useState(() => {
    return getFromLocalStorage("theme") || initialValue;
  });

  React.useEffect(() => {
    setToLocalStorage({ key: "theme", value: state });
  }, [state]);

  return [state, setState];
}

export default useTheme;
