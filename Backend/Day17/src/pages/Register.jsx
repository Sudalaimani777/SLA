import UserDataContext from "../context/UserDataContext"
import { useContext } from "react"

const Register = () => {

  const { userDetails, handleChange, handleRegister } = useContext(UserDataContext);
  console.log(userDetails);

  return (
    <>
      <section>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Enter Name" name="userName" required value={userDetails.userName} onChange={handleChange} />
          <input type="email" placeholder="Enter Email" name="userEmail" value={userDetails.userEmail} onChange={handleChange} />
          <input type="password" placeholder="Enter Password" name="userPassword" value={userDetails.userPassword} onChange={handleChange} />
          <button>Register</button>
        </form>
      </section>
    </>
  )
}

export default Register