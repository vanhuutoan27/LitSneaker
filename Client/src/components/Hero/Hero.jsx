import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container flexCenter content innerWidth">
        {/* LEFT SIDE */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <h1>
              Summer best <br /> Collection <br />
              2023
            </h1>
          </div>

          <div className="hero-desc flexColStart">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <Link to="#!" className="btn">
            Buy Now
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right flexCenter">
          <div className="hero-right-col" style={{ zIndex: '1' }}>
            <h3>Best Selling item ever </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="hero-right-col" style={{ zIndex: '3' }}>
            <h3>Get up to 60% off </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="image-container" style={{ zIndex: '2' }}>
            <img src="../images/hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
