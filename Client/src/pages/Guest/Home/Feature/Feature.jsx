import React from 'react';
import { Link } from 'react-router-dom';

import './Feature.scss';

function Feature() {
  return (
    <div className="feature-wrapper">
      <div className="feature-container content">
        <div className="feature-header">
          <h3 className="primaryText">Featured Products</h3>
          <div className="feature-header-btn">
            <Link className="btn">Explore More</Link>
          </div>
        </div>
        <div className="feature-content">
          <div className="feature-left">
            <h4 className="primaryText">Get 50% Discount</h4>
            <p className="secondaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="feature-btn">
              <Link className="btn">Add To Cart</Link>
            </div>
          </div>
          <div className="feature-right">
            <img src="../images/feature-image.png" alt="Feature" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
