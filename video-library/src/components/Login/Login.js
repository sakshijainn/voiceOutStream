import React,{useState} from 'react'
import {useAuth} from "../../context/AuthContext";
import { useLocation, useNavigate,Link } from "react-router-dom";
import "./Login.css"




function Login() {

    const {state} = useLocation();
    const{isUserLogin, loginUserWithCredentials} = useAuth();
    const navigate = useNavigate();
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");

    

    return (
        <div className="center">
        <input type="checkbox" id="show"/>
        <label for="show" class="show-btn">View Playlists?</label>
        <div className="container">
           <label for="show" class="close-btn fa fa-times" title="close"></label>
           <div className="text">
              Login 
           </div>
           <form action="#">
              <div className="data">
                 <label>UserName</label>
                 <input onChange={(e)=>setUserName(e.target.value)} type="text" required/>
              </div>
              <div className="data">
                 <label>Password</label>
                 <input onChange={(e)=>{setPassword(e.target.value)}} type="password" required/>
              </div>
              <div class="forgot-pass">
                 <a href="#">Forgot Password?</a>
              </div>
              <div className="btn">
                 <div className="inner"></div>
               <button onClick={loginHandler}>
                    {isUserLogin ?"LogIn" :"LogOut"}
                </button>
              </div>
              <div className="signup-link">
                 Not a member? 
                 <Link to="/signup" className="link">
                 <a href="#">Signup now</a>
                 </Link>
              </div>
           </form>
        </div>
     </div>
    )
  

    
    function loginHandler()
    {

        if(loginUserWithCredentials(userName,password) )
        {
        console.log(" ghuss jaa")
        navigate(state?.from ? state.from :"/playlist")
        }
        else 
        {
        console.log("bhaag")
        navigate(state?.from ? state.from :"/login")
        }
           
    }
   
}

export default Login
