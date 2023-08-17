import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* Browser Router for changing url (navigation)
 without using conditional rendering */
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap in provider so that the app has access to store data */}
    <Provider store={store}>
      {/* Wrap in a Router (BrowserRouter) component to tell the browser */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
