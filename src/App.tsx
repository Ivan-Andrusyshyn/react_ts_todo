import GlobalStyle from "./global";
import ContextProviders from "./contextProviders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <ContextProviders>
      <BrowserRouter basename="react_ts_todo">
        <Suspense>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <GlobalStyle />
    </ContextProviders>
  );
}

export default App;
