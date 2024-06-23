import React from "react";
import logo from "./assets/headshot-image.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

//import pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/vite-deploy/">Home</Link>
        {" | "}
        <Link to="/vite-deploy/About">About</Link>
        {" | "}
        <Link to="/vite-deploy/Course">Course</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
