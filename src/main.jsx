import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { Provider } from "react-redux";
import store from "./api/Store/index.js";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
    </Provider>
  </React.StrictMode>
);
