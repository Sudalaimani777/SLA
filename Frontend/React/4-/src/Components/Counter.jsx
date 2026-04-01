import React, { useEffect, useState } from 'react'

const Counter = () => {
    // State to hold the count value
    const [count, setCount] = useState(0);

    //Case 1 :-
    useEffect(() => {
        console.log("Always Render")
    })

    //Case 2 :-
    useEffect(() => {
        console.log("Runs only once when the page is mounted by using the empty dependency array")
    },[])

    //Case 3:-
    useEffect(() => {
        console.log("Runs when the page is mounted and also re-renders when the other state changes in the dependency array")
    }, [count]) // Adding 'count' to the dependency array



  return (
    <>
        <section>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </section>
        
    </>
  )
}

export default Counter