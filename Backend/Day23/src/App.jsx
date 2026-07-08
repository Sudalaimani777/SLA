import { useContext } from "react"
import ThemeContext from "./context/ThemeContext"


const App = () => {

    const { themeStyle, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <div style={themeStyle}>
                <h1>Theme</h1>
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default App