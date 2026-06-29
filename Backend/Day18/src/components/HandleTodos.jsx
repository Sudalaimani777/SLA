import useFetch from "../hooks/useFetch"


const HandleTodos = () => {

    const { saveData } = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
        <>
            {
                saveData.length > 0 ? saveData.map(user => (<h1 key={user.id}>{user.title}</h1>)) : <h1>Fetching User</h1>
            }
        </>
    )
}

export default HandleTodos