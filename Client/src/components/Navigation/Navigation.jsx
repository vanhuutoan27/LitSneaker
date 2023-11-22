import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Navigation.scss';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuMobileRef = useRef(null);

  // Toggles the state of the menu
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Adjusts menu state based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuMobileRef.current && !menuMobileRef.current.contains(event.target)) {
        // If the click event is not inside navigation-menu-mobile, hide the menu
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('mousedown', handleClickOutside); // Mousedown event to capture clicks outside
    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determines if a link is active based on the current path
  const isLinkActive = (pathname) => (location.pathname === pathname ? 'active' : '');

  function scrollOnTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={isMenuOpen ? 'dimmed-background' : ''}>
      <div className="navigation-wrapper">
        <div className="navigation-container content">
          <div className="navigation-logo">
            <Link to="/" onClick={scrollOnTop()}>
              <img src="../images/logo/Lit Sneaker Logo5.png" alt="Lit Sneaker" width={100} />
            </Link>
          </div>
          <div className="navigation-menu">
            {/* Navigation links */}
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
            <Link>
              More <ArrowDropDownIcon className="dropdown" />
            </Link>
          </div>
          <div className="navigation-customer">
            {/* Mobile menu and icons */}
            <div className="navigation-menu-mobile" ref={menuMobileRef}>
              {isMenuOpen ? (
                <CloseIcon className="navigation-icon" onClick={handleMenuClick} />
              ) : (
                <MenuIcon className="navigation-icon" onClick={handleMenuClick} />
              )}
            </div>

            <Link>
              <FavoriteIcon className="navigation-icon" />
            </Link>
            <div className="cart-amount">
              <Link>
                <ShoppingCartIcon className="navigation-icon" />
              </Link>
              <div className="amount-number">
                <Link>99+</Link>
              </div>
            </div>
            <Link>
              <PersonIcon className="navigation-icon" />
            </Link>
          </div>
        </div>
        <div className={`navigation-sub-menu-mobile ${isMenuOpen ? 'show' : ''}`}>
          {/* Sub-menu for mobile */}
          <ul>
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
            <Link>
              <li>More</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
