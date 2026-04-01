import React, { useEffect, useState } from 'react'

const FetchUser = () => {

    //useState Hook :-
    const [name, setName] = useState("Varun");

    //Case 1 :- Runs Everytime
    useEffect(() => {
        console.log("Render Side Work  Every Render")
    }); // empty dependency array to run only once when the component mounts

    //Case 2 :- Runs only once
    useEffect(() => {
        console.log("Runs only one time when the page loads")
    },[]) //Runs only one time when it runs

    //Case 3:- Runs whatever the other state changes in the dependency array [name]
    useEffect(() => {
        console.log("SideEffect work initially and it will rerender when the it has some 'State' in the dependency array")
    },[name])

    return (
        <>
            <section>
                {name}
                <button onClick={() => setName("Kalai")}>Change Name</button>
            </section>
        </>
    )
}

export default FetchUser;