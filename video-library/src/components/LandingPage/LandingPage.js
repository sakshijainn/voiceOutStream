import React from 'react'
import './LandingPage.css';
import sample from "./assets/video1.mp4";
import { Link  } from "react-router-dom";
function LandingPage() {
    return (
      <section className="showcase">
        <header>
            <h2 className="logo">voiceOut<i class="fa fa-gratipay" aria-hidden="true"></i></h2>
        </header>
        <video  autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
    <div class="text">
      <h2>Learn to Write </h2> 
      <h3>Your Own Story</h3>
      <p>By screaming out your thoughts. Explore the inner you in.</p>
      <Link to="/home" className="link">  <button className="explore-btn">EXPLORE</button></Link>
    
      
    </div>
      </section>
    )
}

export default LandingPage
