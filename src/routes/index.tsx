import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoutes";
const Login = lazy(() => import("../Pages/Login"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const CategoriePage = lazy(() => import("../Pages/Categorie"));
const Home = lazy(() => import("../Pages/Home"));
const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute priv={true}>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute priv={false}>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute priv={false}>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categorie/:name",
    element: (
      <ProtectedRoute priv={true}>
        <CategoriePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/login" replace={true} />,
  },
];
export default routes;
