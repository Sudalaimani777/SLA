import './App.css'
import { userOne, userTwo, userThree } from './components/UserCard'
import UserCard from './components/UserCard/UserCard'

function App() {


  return (
    <>
      <UserCard users={userOne}/>
      <UserCard users={userTwo}/>
      <UserCard users={userThree}/>
    </>
  )
}

export default App
