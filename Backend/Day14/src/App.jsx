import { useState } from "react"
import Button from "./shared/Button"

const App = () => {

  const [theme, setTheme] = useState(true);
  const [color, setColor] = useState(true);

  const handleToggle = () => setTheme(prevTheme => !prevTheme);
  const handleChangeColor = () => setColor(prevColor => !prevColor);

  return (
    <>
      {
        theme ? <section>
                  <h1>Data</h1>
                </section> : ""
      }
      <Button clickEvent={handleToggle}>{theme ? "Hide Data" : "Show Data"}</Button>

      <section className={color ? "bg-green-400" : "bg-red-400"}>
          knd
      </section>
      <Button clickEvent={handleChangeColor}>Toggle Color</Button>
    </>
  )
}

export default App