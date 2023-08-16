import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* Browser Router for changing url (navigation)
 without using conditional rendering */
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap in a Router (BrowserRouter) component to tell the browser */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
