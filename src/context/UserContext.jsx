import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const checkUserToken = async () => {
        try {
            const {data} = await axios.get('/me');
            if (data.success === true) {
                setUser(data.user);
                // console.log(data.user)
            }
        }
        catch(err){
            console.log(err);
        }
    }
    
      useEffect(() => {
          if (user === null) {
              checkUserToken();            
          }   
      }, []);
    
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
    }

export {UserContext, UserProvider};