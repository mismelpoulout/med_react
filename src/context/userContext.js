import { createContext, useState } from "react";

const UserContext = createContext();


function UserProvider({ children }) {
    const [auth, setAuth] = useState(false);
    const [userData, setUserData] = useState(null);

    const data = {
        auth,
        setAuth,
        userData,
        setUserData,
    }

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}



export { UserProvider };
export default UserContext;