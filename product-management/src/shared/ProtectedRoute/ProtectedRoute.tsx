import React from "react";
import { Navigate, Route } from "react-router-dom";

const isAuthenticatedUser = () => {
  //logic to find authenticated user.
  return true;
};

const ProtectedRoute = ({ children, path }: any) => {
  return isAuthenticatedUser() ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
