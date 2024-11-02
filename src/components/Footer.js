import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section brand">
          <h3 className="footer-logo">
            <span className="logo-text">GEEK</span>
            <span className="logo-accent">BENCH</span>
          </h3>
          <p className="brand-description">
            Advanced cybersecurity training platform for the next generation of security professionals.
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Training</h4>
          <ul>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/labs">Practice Labs</Link></li>
            <li><Link to="/challenges">CTF Challenges</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/blog">Security Blog</Link></li>
            <li><Link to="/tools">Security Tools</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="cyber-line"></div>
        <div className="footer-info">
          <p>&copy; 2024 GeekBench. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 