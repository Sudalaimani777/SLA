import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const [singleUserData, setSingleUserData] = useState({ userName: "", userAge: "", userEmail: "" });
    const [allUserData, setAllUser] = useState(() => {
        const getData = JSON.parse(localStorage.getItem("userData"));
        try {
            return getData ? getData : []
        } catch (err) {
            return []
        }
    });

    const handleUserValueChange = (e) => {
        const { name, value } = e.target;
        setSingleUserData({ ...singleUserData, [name]: value })
    }

    const handleAddUserData = (e) => {
        e.preventDefault();
        setAllUser(prevUser => [...prevUser, singleUserData]);
        setSingleUserData({ userName: "", userAge: "", userEmail: "" })
    }

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(allUserData))
    }, [allUserData])

    return (
        <UserDataContext.Provider
            value={{
                singleUserData,
                allUserData,
                handleUserValueChange,
                handleAddUserData
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;