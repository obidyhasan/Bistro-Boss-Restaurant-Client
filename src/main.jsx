import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routers/router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
