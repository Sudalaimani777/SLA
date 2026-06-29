import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLoginContext = createContext();

export const UserLoginProvider = ({ children }) => {

    const [loginDetails, setLoginDetails] = useState({ userEmail: "", userPassword: "" })
    const [currentUser, setCurrentUser] = useState(
            JSON.parse(localStorage.getItem("currentUser")) || null
    )

    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userInfo")) || [];

        const matchedUser = user.find(user => user.userEmail === loginDetails.userEmail && user.userPassword === loginDetails.userPassword);

        console.log(matchedUser);

        if (matchedUser) {
            localStorage.setItem("currentUser", JSON.stringify(matchedUser));
            setCurrentUser(matchedUser);
            setLoginDetails({ userName: "", userEmail: "" })
            navigate("/dashboard");
        } else {
            alert("Invalid email or passord");
        }
    }

    return (
        <UserLoginContext.Provider value={{ handleLoginChange, handleLogin, loginDetails, currentUser }}>
            {children}
        </UserLoginContext.Provider>
    )
}

export default UserLoginContext;