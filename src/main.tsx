import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Helmet>
        <title>Huynh Minh Thao</title>
      </Helmet>
    </BrowserRouter>
  </React.StrictMode>,
);
