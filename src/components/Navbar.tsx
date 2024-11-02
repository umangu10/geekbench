import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const currentUser: User | null = JSON.parse(localStorage.getItem('currentUser') || 'null');

  const handleLogout = (): void => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/labs">Labs</Link></li>
        {!currentUser ? (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar; 