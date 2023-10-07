import React from "react";
import GlobalStyle from "./global";
import ContextProviders from "./contextProviders";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CategoriePage from "./Pages/Categorie";
import ProtectedRoute from "./Routes/Route";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <ContextProviders>
      <BrowserRouter basename="react_ts_todo">
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
      </BrowserRouter>
      <GlobalStyle />
    </ContextProviders>
  );
}

export default App;
