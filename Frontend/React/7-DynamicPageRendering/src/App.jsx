import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        if(response.ok) setUser(data);
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      <main>
          {user && user.map(item => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </div>
          ))
          }
      </main>
    </>
  )
}

export default App
