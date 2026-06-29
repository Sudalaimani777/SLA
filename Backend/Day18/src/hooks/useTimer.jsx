import { useEffect, useState } from 'react'

const useTimer = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
    console.log("useEffect Running")
    return () => clearInterval(timer)
  }, []);

  return {
    count
  }
}

export default useTimer