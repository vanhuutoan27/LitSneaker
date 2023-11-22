import React from 'react';
import { Link } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './About.scss';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container content">
        <div className="about-left">
          <h4>About Us</h4>
          <h3 className="primaryText">We Provide High Quality Shoes.</h3>
          <p className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="about-btn">
            <Link className="btn">Read More</Link>
          </div>
        </div>

        <div className="about-right">
          <Link>
            <div className="about-play-btn">
              <PlayCircleIcon className="play-btn" />
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
