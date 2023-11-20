import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container flexCenter content innerWidth">
        {/* LEFT SIDE */}
        <div className="hero-left flexColStart">
          <h1 className="hero-title">Summer best Collection 2023</h1>
          <p className="hero-desc flexColStart">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link to="#!" className="btn">
            Buy Now
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="image-container">
            <img src="../images/hero-image.png" alt="hero-image" />
          </div>

          <div className="hero-right-col col-1">
            <h3>Best Selling item ever</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="hero-right-col col-2">
            <h3>Get up to 60% off</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
