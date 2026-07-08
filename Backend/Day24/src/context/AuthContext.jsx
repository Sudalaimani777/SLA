import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("currentUserData"));
        if (userData) {
            setCurrentUser(userData);
        }
    },[])

    const login = userData => {
        localStorage.setItem("currentUserData", JSON.stringify(userData));
        setCurrentUser(userData);
    }

    const logOut = () => {
        localStorage.removeItem("currentUserData");
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{ login, logOut, currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}