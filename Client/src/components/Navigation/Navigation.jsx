import React from 'react';

import { Link } from 'react-router-dom';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import './Navigation.scss';

function Navigation() {
  return (
    <div className="navigation-wrapper">
      <div className="navigation-container content">
        <div className="navigation-logo">
          <img src="../images/logo/Lit Sneaker Logo5.png" alt="Lit Sneaker" width={100} />
        </div>
        <div className="navigation-menu">
          <Link to="#!">Home</Link>
          <Link to="#!">About</Link>
          <Link to="#!">Shop</Link>
          <Link to="#!">Blog</Link>
          <Link to="#!">Contact Us</Link>
        </div>
        <div className="navigation-customer">
          <Link to="#!">
            <FavoriteBorderIcon className="navigation-icon" />
          </Link>
          <Link to="#!">
            <ShoppingBagOutlinedIcon className="navigation-icon" />
          </Link>
          <Link to="#!">
            <PersonOutlineIcon className="navigation-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
