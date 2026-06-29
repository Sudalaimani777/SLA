import { useContext } from "react"
import UserLoginContext from "../context/UserLoginContext"

const Dashboard = () => {

  const {currentUser} = useContext(UserLoginContext);

  return (
    <>
      <section>
        <h1>Dashboard</h1>
        <h2>{currentUser?.userName}</h2>
        <h3>{currentUser?.userEmail}</h3>
      </section>
    </>
  )
}

export default Dashboard