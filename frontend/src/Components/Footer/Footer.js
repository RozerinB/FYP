import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <p className='footer-heading'>
          Lets collect data for UX researchers 
        </p>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact Us</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Get Started</h2>
            <Link to='/DataCollection'>Get Started</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Global Data Collection © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;