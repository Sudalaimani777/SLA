import useCount from "./hooks/useCount"
import TogglePage from "./pages/TogglePage";
const App = () => {

  const { count, handleDec, handleInc, handleReset } = useCount()

  return (
    <>
      <section>
        <h1>{count}</h1>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={handleReset}>Reset</button>
      </section>
      <TogglePage />
    </>
  )
}

export default App;