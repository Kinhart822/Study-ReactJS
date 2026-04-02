import { createContext, useState } from "react";

const ThemeContext = createContext();
// trả về 1 object có 2 thuộc tính: Provider và Consumer
// Cả  2 đều là react component
console.log(ThemeContext);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };

