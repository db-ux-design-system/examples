import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router";
import Page1 from "./pages/Page1.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Page1 />}>
            Page 1
          </Route>
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
