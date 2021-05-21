import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { fakeAuthApi } from "./fakeAuthApi"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);
  useEffect(()=>{
    const loginStatus = JSON.parse(localStorage?.getItem("login"))
    loginStatus?.isuUserLoggedIn&&setLogin(true)
  },[])


  async function loginUserWithCredentials(username, password) {
    try {
      const response = await fakeAuthApi(username, password);
      if (response.success) {
        setLogin(true);
        localStorage?.setItem("login",JSON.stringify({isuUserLoggedIn:true}))
      }
    } catch (error) {
      console.log("Sahi username password nahi pata kya?", error);
    }

  }

  return (
    <AuthContext.Provider value={{ isUserLogin, loginUserWithCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
