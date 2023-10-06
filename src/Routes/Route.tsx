import React, { useContext } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ChildrenProps } from "../Contexts/deleteContext";

import AuthContext from "../Contexts/authContext";
import { AuthType } from "../Contexts/authType";

interface ProtectedRouteProps {
  children: React.ReactNode;
  priv: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, priv }) => {
  const { userData } = useContext(AuthContext) as AuthType;
  const authLocal = localStorage.getItem("@Project:email");

  if (!!userData?.email === priv || !!authLocal === priv) {
    return <>{children}</>;
  } else {
    return (
      <Navigate
        to={{
          pathname: priv ? "/login" : "/",
        }}
      />
    );
  }
};

export default ProtectedRoute;
