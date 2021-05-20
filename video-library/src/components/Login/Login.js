import React from 'react'
import {useAuth} from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";



function Login() {

    const {state} = useLocation();
    const navigate = useNavigate();
    const{isUserLogin, login} = useAuth();

    function loginHandler()
    {
            login("abc",123)
            navigate(state?.from ? state.from :"/home")
    }
    return (
        <div style={{marginTop:"9rem"}}>
            <h1> Chaabi Layaa Kya ???</h1>
            <button onClick={loginHandler}>
            {isUserLogin ?"I am Logged In" :"I am Logged Out"}
            </button>
        </div>
    )
}

export default Login
