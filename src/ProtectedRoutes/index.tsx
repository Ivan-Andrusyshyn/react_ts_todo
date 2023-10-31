import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../Contexts/authContext";
import { AuthType } from "../Contexts/typesContext/authType";
import ProtectedRouteProps from "./types";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, priv }) => {
  const { userData } = useContext(AuthContext) as AuthType;
  const authLocal = JSON.parse(
    localStorage.getItem("@Project:email") || "null"
  );

  if (!!userData?.email === priv || !!authLocal === priv) {
    return <>{children}</>;
  } else {
    return (
      <Navigate
        to={{
          pathname: priv ? "/login" : "/",
        }}
        replace={true}
      />
    );
  }
};

export default ProtectedRoute;
