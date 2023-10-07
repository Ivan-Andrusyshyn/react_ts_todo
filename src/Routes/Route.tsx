import React, { useContext } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ChildrenProps } from "../Contexts/delete_edit_Context";

import AuthContext from "../Contexts/authContext";
import { AuthType } from "../Contexts/typesContext/authType";

interface ProtectedRouteProps {
  children: React.ReactNode;
  priv: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, priv }) => {
  const { userData } = useContext(AuthContext) as AuthType;
  const authLocal = JSON.parse(
    localStorage.getItem("@Project:email") || "null"
  );

  if (!!userData?.email === priv || !!authLocal.email === priv) {
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
