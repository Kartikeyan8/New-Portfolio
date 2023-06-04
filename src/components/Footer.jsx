import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="footer-links">
          <a href="/">Home</a> |   <a href="/projects">Projects</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;