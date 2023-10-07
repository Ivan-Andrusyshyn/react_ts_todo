import React, { Suspense, lazy } from "react";
import GlobalStyle from "./global";
import ContextProviders from "./contextProviders";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Routes/Route";
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const CategoriePage = lazy(() => import("./Pages/Categorie"));
function App() {
  return (
    <ContextProviders>
      <BrowserRouter basename="react_ts_todo">
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute priv={true}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute priv={false}>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute priv={false}>
                  <SignUp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/categorie/:name"
              element={
                <ProtectedRoute priv={true}>
                  <CategoriePage />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <GlobalStyle />
    </ContextProviders>
  );
}

export default App;
