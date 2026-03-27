import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [hasToggledLogin, setHasToggledLogin] = useState(false)

  // 1) Runs on every render
  useEffect(() => {
    console.log('1. you are logged in all // dashboard')
  })

  // 2) Runs only once on initial mount
  useEffect(() => {
    alert('2. the page is loaded')
  }, [])

  // 3) Runs when login state changes (skip first mount)
  useEffect(() => {
    if (!hasToggledLogin) {
      return
    }

    alert(isLoggedIn ? '3. you are loggedin' : '3. you are not loggedin')
  }, [isLoggedIn, hasToggledLogin])

  const handleToggleLogin = () => {
    setHasToggledLogin(true)
    setIsLoggedIn((prev) => !prev)
  }

  return (
    <>
      <h1>useEffect Demo</h1>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <button onClick={handleToggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </>
  )
}

export default App
