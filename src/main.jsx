import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "/src/css/home.css";
import "/src/css/header.css";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
