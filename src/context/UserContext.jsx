import React, {useState, useEffect, createContext} from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     if (!user) {
            
    //         fetch("/me").then(({data}) => {
    //             console.log(data);
    //         })
    //     }   
    // }, []);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
    }

export {UserContext, UserProvider};