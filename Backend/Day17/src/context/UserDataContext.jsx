import { createContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"


const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

  const [userDetails, setUserDetails] = useState({ userName: "", userEmail: "", userPassword: "" });
  const [allUserDetails, setAllUserDetails] = useState(() => {
    try {
      const getData = JSON.parse(localStorage.getItem("userInfo"));
      return getData ? getData : []
    } catch (e) {
      return []
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value })
  }

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setAllUserDetails(prevData => [...prevData, userDetails]);
    setUserDetails({ userName: "", userEmail: "", userPassword: "" })
    navigate("/login");
  }

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(allUserDetails));
  }, [allUserDetails])


  return (
    <UserDataContext.Provider
      value={{ userDetails, handleChange, handleRegister }}
    >
      {children}
    </UserDataContext.Provider>
  )
}

export default UserDataContext;