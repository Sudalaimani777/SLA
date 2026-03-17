import UserProfile from "./Components/UserProfile/UserProfile"
import { users } from "./Components/UserProfile/index.js"

function App() {

  return (
    <>
      <section>
        <UserProfile userProfile={users}/>
      </section>
    </>
  )
}

export default App
