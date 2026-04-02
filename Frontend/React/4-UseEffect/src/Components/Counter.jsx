import React, { useEffect, useState } from 'react'

const Counter = () => {
    // State to hold the count value
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    //Case 1 :-
    useEffect(() => {
        console.log("Always Render")
    })

    //Case 2 :-
    useEffect(() => {
        console.log("Runs only once when the page is mounted by using the empty dependency array")
    }, [])

    //Case 3:-
    useEffect(() => {
        console.log("Runs when the page is mounted and also re-renders when the other state changes in the dependency array")
    }, [count]) // Adding 'count' to the dependency array

    const handleShowUser = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }

    return (
        <>
            <section>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </section>

            <section>
                <button onClick={handleShowUser}>Show User</button>
                {loading && <p>Loading...</p>}
                {user && (
                    <div>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Counter