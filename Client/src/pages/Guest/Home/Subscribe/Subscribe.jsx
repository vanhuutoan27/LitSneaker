import React from 'react';
import { Link } from 'react-router-dom';

import './Subscribe.scss';

function Subscribe() {
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe-container content">
        <div className="subscribe-left">
          <h3 className="primaryText">Subscribe & Get 10% Off</h3>
          <p className="secondaryText">
            Join our email subscription now to get updates on promotions and coupons.
          </p>
        </div>
        <div className="subscribe-right">
          <div className="subscribe-input">
            <input type="email" placeholder="Email Address" />
            <Link className="btn">Subscribe</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
