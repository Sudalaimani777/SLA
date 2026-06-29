import { useContext } from "react"
import UserLoginContext from "../context/UserLoginContext"


const Login = () => {

  const { handleLoginChange, handleLogin, loginDetails } = useContext(UserLoginContext);

  return (
    <>
      <section>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter Email" value={loginDetails.userEmail} name="userEmail" onChange={handleLoginChange} />
          <input type="password" name="userPassword" value={loginDetails.userPassword} onChange={handleLoginChange} />
          <button>Login</button>
        </form>
      </section>
    </>
  )
}

export default Login