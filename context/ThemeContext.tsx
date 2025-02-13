import { PropsWithChildren, createContext, useContext, useState } from "react";
import { getGlobalStyles } from "../styles/globalStyles";

export interface ThemeContextProps {
  toggle: () => void;
  globalStyles: any;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [lightMode, setLighMode] = useState(true);

  const themeContext: ThemeContextProps = {
    toggle: () => {
      console.log("TOGGLE!");
      setLighMode(!lightMode);
    },
    globalStyles: lightMode
      ? getGlobalStyles("light")
      : getGlobalStyles("dark"),
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used inside ThemeContextProvider!");
  }

  return context;
}
