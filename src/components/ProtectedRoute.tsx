import React from 'react';
import { Navigate } from 'react-router-dom';
import { User } from '../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const currentUser: User | null = JSON.parse(localStorage.getItem('currentUser') || 'null');

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 