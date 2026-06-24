import { useState } from "react";
import { createContext } from "react";


const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const [singleUserData, setSingleUserData] = useState({ userName: "", userAge: "", userEmail: "" });
    const [allUserData, setAllUser] = useState([]);

    const handleUserValueChange = (e) => {
        const { name, value } = e.target;
        setSingleUserData({ ...singleUserData, [name]: value })
    }

    const handleAddUserData = (e) => {
        e.preventDefault();
        setAllUser(prevUser => [...prevUser, singleUserData]);
        setSingleUserData({ userName: "", userAge: "", userEmail: "" })
        
    }

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