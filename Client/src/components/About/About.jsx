import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Modal } from '@mui/material';

import './About.scss';

function About() {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoOpen = (event) => {
    event.preventDefault();
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  // Define the style for the modal content
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

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
          <Link className="about-play-btn" onClick={(event) => handleVideoOpen(event)}>
            <PlayCircleIcon className="play-btn" />
            <span></span>
          </Link>
        </div>
      </div>

      <Modal
        open={showVideo}
        onClose={handleVideoClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            src="https://www.youtube.com/embed/VhBl3dHT5SY"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            title="Video"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export default About;
