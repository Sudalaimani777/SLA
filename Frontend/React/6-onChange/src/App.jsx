import './App.css'
import { useState } from 'react'
function App() {

  const [user, setUser] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      const data = await response.json()
  
      if (response.ok) {
        setUser(data);
      }else{
        console.error('Failed to fetch users:', response.statusText)
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
  }

  return (
    <>
      <h1>onChange</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type anything" />
        <button type="submit">Get Users</button>
      </form>

      <section>
        {user && (
          user.map(item => (
            <section key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </section>
          ))
        )}
      </section>
    </>
  )
}

export default App
