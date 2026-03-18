import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleAddCount = () => {
    if (count === 100) {
      setCount(100);
    }
    else {
      setCount(count + 1);
    }
  }

  const handleMinusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0)
  }


  return (
    <>
      <section>
        <p>{count}</p>
        <button onClick={handleAddCount}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleMinusCount}>-</button>
      </section>
    </>
  )
}

export default App
