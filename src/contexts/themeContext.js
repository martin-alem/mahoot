import React from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useTheme("light_mode");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
