import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');  // Check if token exists

  if (!token) {
    // If no token, redirect to admin login
    return <Navigate to="/adminlogin" />;
  }

  // If token exists, render the protected route
  return children;
};

export default PrivateRoute;
