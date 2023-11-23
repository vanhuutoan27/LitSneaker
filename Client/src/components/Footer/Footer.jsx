import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container content">
        <div className="footer-header">
          <img src="../images/logo/Lit Sneaker Logo5.png" alt="Lit Sneaker" width={150} />
          <div className="footer-header-social">
            <Link>
              <FaFacebookF className="social-icon" />
            </Link>
            <Link>
              <FaTwitter className="social-icon" />
            </Link>
            <Link>
              <FaLinkedinIn className="social-icon" />
            </Link>
            <Link>
              <FaInstagram className="social-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Shop</Link>
              </li>

              <li>
                <Link>Categories</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="other-pages">
            <h3>Other Pages</h3>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms of use</Link>
              </li>
              <li>
                <Link>Track Order</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <Link to="tel:0792766979">
                  <LocalPhoneIcon className="contact-icon" />
                  (+84) 792 766 979
                </Link>
              </li>
              <li>
                <LocationOnIcon className="contact-icon" />
                Duong Nguyen Thi Lang, Huyen Cu Chi, Tp.HCM
              </li>
              <li>
                <Link to="mailto:litsneaker.contact@gmail.com">
                  <EmailIcon className="contact-icon" />
                  litsneaker.contact@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="opening-hour">
            <h3>Opening Hour</h3>
            <ul>
              <li>Mon - Fri : 09:30 AM - 08:00PM</li>
              <li>Sat - Sun : 10:30 AM - 03:00PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-footer">
          <p>Copyright &copy; 2023 Lit Sneaker, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
