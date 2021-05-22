import React,{useState,useEffect} from "react";
import validate from "./VaildateSignUp";
import useSignUp from "./useSignUp";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
const Signup = () => {
  
 
  const { handleChange, handleSubmit, values, errors } = useSignUp(validate);





   
  return (
    <div className="center">
      <input type="checkbox" id="show" />
      <label for="show" class="show-btn">
        Register for Playlists?
      </label>
      <div className="container">
        <label for="show" class="close-btn fa fa-times" title="close"></label>
        <div className="text">SignUp</div>
        <form action="#" onSubmit={handleSubmit}>
     
          <div className="data">
            <label>Enter Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
          <div className="data">
            <label>Enter Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>
          <div className="data">
            <label>Re-Enter Password</label>
            <input
              type="password"
              name="password2"
              placeholder="Re-Enter your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="error-msg">{errors.password2}</p>}
          </div>
          <div className="btn">
            <div className="inner"></div>

            
            <button onClick={()=> <p>Success</p>}>SignUp</button>
          </div>
          <div className="signup-link">
            Already a member?
            <Link to="/login" className="link">
              <a href="#">Login now</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
