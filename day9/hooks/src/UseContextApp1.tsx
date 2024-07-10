import {useEffect, useState} from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";

function UseContextApp1() {
  const [isDark, setIsDark] = useState(false);

  return <ThemeContext.Provider value={{isDark, setIsDark}}>
    <Page />
  </ThemeContext.Provider>
}

export default UseContextApp1;