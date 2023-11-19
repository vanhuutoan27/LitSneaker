import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navigation.scss';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', checkScreenSize);

    checkScreenSize();

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isLinkActive = (pathname) => (location.pathname === pathname ? 'active' : '');

  return (
    <div className="navigation-wrapper">
      <div className="navigation-container content">
        <div className="navigation-logo">
          <Link to="#!">
            <img src="../images/logo/Lit Sneaker Logo5.png" alt="Lit Sneaker" width={100} />
          </Link>
        </div>
        <div className="navigation-menu">
          <Link to="/" className={isLinkActive('/')}>
            Home
          </Link>
          <Link to="/men" className={isLinkActive('/men')}>
            Men
          </Link>
          <Link to="/women" className={isLinkActive('/women')}>
            Women
          </Link>
          <Link to="/kids" className={isLinkActive('/kids')}>
            Kids
          </Link>
          <Link to="/blog" className={isLinkActive('/blog')}>
            Blog
          </Link>
          <Link to="/contact" className={isLinkActive('/contact')}>
            Contact
          </Link>
        </div>
        <div className="navigation-customer">
          <div className="navigation-menu-mobile">
            {isMenuOpen ? (
              <CloseIcon className="navigation-icon" onClick={handleMenuClick} />
            ) : (
              <MenuIcon className="navigation-icon" onClick={handleMenuClick} />
            )}
          </div>
          <Link to="#!">
            <FavoriteIcon className="navigation-icon" />
          </Link>
          <Link to="#!">
            <ShoppingBagRoundedIcon className="navigation-icon" />
          </Link>
          <Link to="#!">
            <PersonIcon className="navigation-icon" />
          </Link>
        </div>
      </div>
      <div className={`navigation-sub-menu ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <Link to="/">
            <li className={isLinkActive('/')}>Home</li>
          </Link>
          <Link to="/men">
            <li className={isLinkActive('/men')}>Men</li>
          </Link>
          <Link to="/women">
            <li className={isLinkActive('/women')}>Women</li>
          </Link>
          <Link to="/kids">
            <li className={isLinkActive('/kids')}>Kids</li>
          </Link>
          <Link to="/blog">
            <li className={isLinkActive('/blog')}>Blog</li>
          </Link>
          <Link to="/contact">
            <li className={isLinkActive('/contact')}>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
