import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);

    const toggleTheme = () => setTheme(prevTheme => !prevTheme);

    const themeStyle = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black"
    }

    return (
        <ThemeContext.Provider value={{ themeStyle, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;