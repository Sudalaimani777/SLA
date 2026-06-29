
import useFetch from '../hooks/useFetch'

const HandleAPI = () => {

  const { saveData } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
      {
        saveData.length > 0 ? saveData.map(user => (<h1 key={user.name}>{user.name}</h1>)) : <h1>Fetching User</h1>
      }
    </>
  )
}

export default HandleAPI