import { useState } from "react"

const useCount = () => {

    const [count, setCount] = useState(0);

    const handleInc = () => setCount(prevCount => prevCount +1);
    const handleDec = () => setCount(prevCount => prevCount -1);
    const handleReset = () => setCount(0);

  return {
    count,
    handleDec,
    handleInc,
    handleReset
  }
}

export default useCount;