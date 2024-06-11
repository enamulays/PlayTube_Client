import React from 'react';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();

  return <Component {...rest} isAuthenticated={!!user} />;
};

export default PublicRoute;
