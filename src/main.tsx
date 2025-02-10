import ReactDOM from "react-dom/client";
import { HashRouter, useLocation } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { useEffect } from "react";

const root = document.getElementById("root");

function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const path = params.get("p");
    console.log({ path, params, location });
    if (path) {
      const fixedPath = path.startsWith("/") ? path : "/" + path;
      window.history.replaceState({}, "", fixedPath);
    }
  }, [location]);

  return null;
}

ReactDOM.createRoot(root!).render(
  <HashRouter>
    <RouteHandler />
    <App />
  </HashRouter>
);
