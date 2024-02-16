import React from "react";
import ReactDOM from "react-dom/client";
import "./source/utilities/colors.css";
import "./source/utilities/fonts.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./source/pages/Welcome/Welcome";
import Login from "./source/pages/Login/Login";
import Home from "./source/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
