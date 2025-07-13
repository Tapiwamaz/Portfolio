import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  toggleTheme: () => void;
  asideOn: boolean;
  setAsideOn: (asideOn: boolean) => void;
  toggleAside: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      // light mode
      root.style.setProperty("--background", "#fbfbfb");
      root.style.setProperty("--text-main", "#010101");
      root.style.setProperty("--card-background", "#f9f9f9");
      root.style.setProperty("--white-highlight", "#efefef");
    } else {
      //  dark mode
      root.style.setProperty("--background", "#010101");
      root.style.setProperty("--text-main", "#fbfbfb");
      root.style.setProperty("--white-highlight", "#141414");
      root.style.setProperty("--card-background", "#010000");
    }

    setIsDarkMode(!isDarkMode);
  };

  const [asideOn, setAsideOn] = useState(false);
  const toggleAside = () => {
    setAsideOn(!asideOn);
  };

  const contextValue = { isDarkMode, setIsDarkMode, toggleTheme, asideOn,setAsideOn,toggleAside };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
