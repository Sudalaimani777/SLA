import React, { useState } from 'react'
import './style.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => count === 100 ? setCount(100) : setCount(count + 1);

  const handleDec = () => count > 0 && setCount(count - 1);

  const handleReset = () => setCount(0);


  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button className="btn-increment" onClick={handleInc}>Increment</button>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
        <button className="btn-decrement" onClick={handleDec}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;