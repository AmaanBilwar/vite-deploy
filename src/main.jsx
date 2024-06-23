import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/vite-deploy/",
    element: <App />,
    children: [
      {
        path: "/vite-deploy/",
        element: <Home />,
      },
      {
        path: "/vite-deploy/Home",
        element: <Home />,
      },
      {
        path: "/vite-deploy/about",
        element: <About />,
      },
      {
        path: "/vite-deploy/Resume",
        element: <Resume />,
      },
      {
        path: "/vite-deploy/Course",
        element: <Course />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
