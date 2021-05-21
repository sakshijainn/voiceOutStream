import React from 'react'
import { useLocation, useNavigate,Link } from "react-router-dom";
import "./SignUp.css"
function SignUp() {
    return (
        <div className="center">
        <input type="checkbox" id="show"/>
        <label for="show" class="show-btn">Register for Playlists?</label>
        <div className="container">
           <label for="show" class="close-btn fa fa-times" title="close"></label>
           <div className="text">
              SignUp
           </div>
           <form action="#">
              <div className="data">
                 <label>Enter UserName</label>
                 <input type="text" required/>
              </div>
              <div className="data">
                 <label>Enter Password</label>
                 <input  type="password" required/>
              </div>
              <div className="data">
              <label>Re-Enter Password</label>
              <input  type="password" required/>
           </div>
              <div className="btn">
                 <div className="inner"></div>
               <button>SignUp</button>
                
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
    )
}

export default SignUp
