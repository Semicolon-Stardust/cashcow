import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
    }

export {UserContext, UserProvider};