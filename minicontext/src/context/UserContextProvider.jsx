import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({childern})=>{
    const [user, setUser] = React.useState('')
    // const [password, setPassword] = React.useState('')
    return(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
        {childern}
        </UserContext.Provider>
    )
}

export default UserContextProvider;