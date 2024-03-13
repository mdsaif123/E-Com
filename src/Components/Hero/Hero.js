


import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';


import cartpng from "../Assets/homecart.png"

const Hero = () => {
  return (
    <div className='container-fluid hero'>
      <div className="row">
        <div className="col-lg-6 hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon d-flex align-items-center gap-3">
              <p className="m-0">new</p>
              <img src={hand_icon} alt="" />
            </div>
            <p style={{color:'blue'}}>collection for everyone</p>
          </div>
          <div className="hero-latest-btn d-flex justify-content-center align-items-center gap-3">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="col-lg-6 hero-right"> 
          <img src={cartpng} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
