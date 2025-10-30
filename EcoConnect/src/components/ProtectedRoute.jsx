import React from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useApp();
  
  if (!user) {
    return ;
  }

  return children;
};

export default ProtectedRoute;