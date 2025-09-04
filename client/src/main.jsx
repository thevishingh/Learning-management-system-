import React from "react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </BrowserRouter>
);
