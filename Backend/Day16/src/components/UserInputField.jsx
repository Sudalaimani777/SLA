import { useContext } from "react"
import UserDataContext from "../context/UserDataContext"


const UserInputField = () => {
    const { handleAddUserData, handleUserValueChange, singleUserData } = useContext(UserDataContext);
    return (
        <>
            <section>
                <form>
                    <input type="text" value={singleUserData.userName} placeholder="Enter your name" name="userName" onChange={handleUserValueChange} required/>
                    <input type="text" value={singleUserData.userAge} placeholder="Enter your name" name="userAge" onChange={handleUserValueChange} required/>
                    <input type="text" value={singleUserData.userEmail} placeholder="Enter your name" name="userEmail" onChange={handleUserValueChange} required/>
                    <button type="submit" onClick={handleAddUserData}>Add User</button>
                </form>
            </section>
        </>
    )
}

export default UserInputField