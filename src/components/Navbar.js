import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">GEEK</span>
          <span className="logo-accent">BENCH</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Courses Dropdown */}
          <div className="nav-group">
            <Link to="/courses" className="nav-link">
              <span className="link-icon">⚡</span>
              Courses
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4 className="dropdown-title">Top Courses</h4>
                <Link to="/courses/web-security">Web Application Security</Link>
                <Link to="/courses/network-security">Network Security</Link>
                <Link to="/courses/malware-analysis">Malware Analysis</Link>
                <Link to="/courses/penetration-testing">Penetration Testing</Link>
                <Link to="/courses/cloud-security">Cloud Security</Link>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-section">
                <h4 className="dropdown-title">Explore More</h4>
                <Link to="/courses" className="view-all-link">
                  <span>View All Courses</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Labs Section */}
          <div className="nav-group">
            <Link to="/labs" className="nav-link">
              <span className="link-icon">🔬</span>
              Labs
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4 className="dropdown-title">Featured Labs</h4>
                <Link to="/labs/web-pentesting">Web Penetration Testing</Link>
                <Link to="/labs/network-security">Network Security</Link>
                <Link to="/labs/malware-analysis">Malware Analysis</Link>
                <Link to="/labs/ctf-challenges">CTF Challenges</Link>
                <Link to="/labs/forensics">Digital Forensics</Link>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-section">
                <h4 className="dropdown-title">Explore More</h4>
                <Link to="/labs" className="view-all-link">
                  <span>View All Labs</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="nav-group">
            <Link to="/certifications" className="nav-link">
              <span className="link-icon">🏆</span>
              Certifications
            </Link>
            <div className="dropdown-content">
              <Link to="/certifications/security">Security Expert</Link>
              <Link to="/certifications/pentester">Penetration Tester</Link>
              <Link to="/certifications/analyst">Security Analyst</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="nav-group">
            <Link to="/resources" className="nav-link">
              <span className="link-icon">📚</span>
              Resources
            </Link>
            <div className="dropdown-content">
              <Link to="/resources/tools">Security Tools</Link>
              <Link to="/resources/blog">Security Blog</Link>
              <Link to="/resources/community">Community</Link>
            </div>
          </div>

          {/* Plans Link */}
          <Link to="/plans" className="nav-link">
            <span className="link-icon">💎</span>
            Plans
          </Link>
          
          {user ? (
            <div className="user-menu">
              <div className="profile-trigger">
                <div className="user-avatar">
                  {user.username[0].toUpperCase()}
                </div>
                <div className="user-info">
                  <span className="username">{user.username}</span>
                  <span className="user-role">Security Trainee</span>
                </div>
              </div>
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  <span className="item-icon">👤</span>
                  Profile
                </Link>
                <Link to="/dashboard" className="dropdown-item">
                  <span className="item-icon">📊</span>
                  Dashboard
                </Link>
                <Link to="/settings" className="dropdown-item">
                  <span className="item-icon">⚙️</span>
                  Settings
                </Link>
                <Link to="/my-certifications" className="dropdown-item">
                  <span className="item-icon">🏅</span>
                  My Certifications
                </Link>
                <Link to="/subscription" className="dropdown-item">
                  <span className="item-icon">💳</span>
                  Subscription
                </Link>
                <button onClick={handleLogout} className="dropdown-item logout">
                  <span className="item-icon">🚪</span>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="nav-btn login">Login</Link>
              <Link to="/register" className="nav-btn register">Register</Link>
            </div>
          )}
        </div>

        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;