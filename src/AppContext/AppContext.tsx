import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    isDarkMode: boolean;
    setIsDarkMode : (isDarkMode: boolean) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [ isDarkMode,setIsDarkMode] = useState(false);

    const contextValue = {isDarkMode,setIsDarkMode}
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};