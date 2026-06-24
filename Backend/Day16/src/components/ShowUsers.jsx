import { useContext } from "react"
import UserDataContext from "../context/UserDataContext"


const ShowUsers = () => {
  const { allUserData } = useContext(UserDataContext);


  return (
    <>
      <section>
        {
          allUserData.map((user, idx) => (
            <div key={idx}>
              <p>{user.userName}</p>
              <p>{user.userAge}</p>
              <p>{user.userEmail}</p>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default ShowUsers