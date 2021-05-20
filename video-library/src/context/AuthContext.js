import { createContext, useContext } from "react";
import { useState } from "react";

const user ={
  username:"abc",
  password:"123"
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);
  function login(username,password)
  {
    if(username=== user.username &&  password === user.password)
    {
      setLogin(true)
    }
  }

  return (
    <AuthContext.Provider value={{ isUserLogin, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
