import React from "react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        toastClassName="custom-toast"
      />
  </BrowserRouter>
);
