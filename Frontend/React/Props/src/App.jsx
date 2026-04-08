import Profile from "./Profile";
import { userDataArr } from "./store/userData";


function App() {

  

  return (
    <>
      <Profile userData={userDataArr} />
    </>
  )
}

export default App
