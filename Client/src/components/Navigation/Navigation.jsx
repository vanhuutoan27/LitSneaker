import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OutsideClickHandler from 'react-outside-click-handler';

import './Navigation.scss';

function Navigation() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();
  const menuMobileRef = useRef(null);

  // Toggles the state of the menu
  const handleMenuClick = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  // Handlers for hover state of 'More' link
  const handleMoreEnter = () => setIsSubMenuOpen(true);
  const handleMoreLeave = () => setIsSubMenuOpen(false);

  // Adjusts menu state based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuMobileOpen(false);
      }
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Determines if a link is active based on the current path
  const isLinkActive = (pathname) => (location.pathname === pathname ? 'active' : '');

  function scrollOnTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={isMenuMobileOpen ? 'dimmed-background' : ''}>
      <div className="navigation-wrapper">
        <div className="navigation-container content">
          <div className="navigation-logo">
            <Link to="/" onClick={scrollOnTop}>
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
            <Link onMouseEnter={handleMoreEnter} onMouseLeave={handleMoreLeave}>
              More <ArrowDropDownIcon className="dropdown" />
            </Link>
          </div>
          <div className="navigation-customer">
            {/* Mobile menu and icons */}
            <div className="navigation-menu-mobile" ref={menuMobileRef}>
              {isMenuMobileOpen ? (
                <CloseIcon className="navigation-icon" onClick={handleMenuClick} />
              ) : (
                <MenuIcon className="navigation-icon" onClick={handleMenuClick} />
              )}
            </div>

            <div className="navigation-profile">
              <Link to="#!">
                <FavoriteIcon className="navigation-icon" />
              </Link>
              <div className="cart-amount">
                <Link to="#!">
                  <ShoppingCartIcon className="navigation-icon" />
                </Link>
                <div className="amount-number">
                  <Link to="#!">99+</Link>
                </div>
              </div>
              <Link to="#!">
                <PersonIcon className="navigation-icon" />
              </Link>
            </div>
          </div>
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setIsMenuMobileOpen(false);
          }}
        >
          {/* Navigation for mobile */}
          <div style={{ margin: '0 24px' }}>
            <div className={`navigation-sub-menu-mobile ${isMenuMobileOpen ? 'show' : ''}`}>
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
                <Link to="/track-order">
                  <li>Track Order</li>
                </Link>
                <Link to="/testimonial">
                  <li>Testimonial</li>
                </Link>
                <Link to="/faq">
                  <li>FAQ</li>
                </Link>
              </ul>
            </div>
          </div>
        </OutsideClickHandler>

        <div style={{ margin: '0 184px' }}>
          <div
            className={`navigation-sub-menu ${isSubMenuOpen ? 'show' : ''}`}
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            {/* Sub-navigation for PC */}
            <ul>
              <Link to="/track-order">
                <li>Track Order</li>
              </Link>
              <Link to="/testimonial">
                <li>Testimonial</li>
              </Link>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
