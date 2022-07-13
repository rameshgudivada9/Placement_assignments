import { createContext, useState } from "react";
export const Authcontext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    function authToggle() { 
        setAuth((p) => !p)
      
    }
  return <Authcontext.Provider value={{auth,authToggle}}>{children}</Authcontext.Provider>;
};
