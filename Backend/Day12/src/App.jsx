import { useState } from "react"


const App = () => {

  const [theme, setTheme] = useState(null);

  const handleNull = () => {
    // setTheme(prevData => prevData ? null : "React");
    setTheme(prevData => prevData === null ? "React" : null)
  }


 
  return (
    <>
      <main>
        <section>
          <h1> {theme ?? "This is null"}</h1>
          <button onClick={handleNull}>Change</button>
        </section>
        <section>        
        </section>
      </main>
    </>
  )
}

export default App