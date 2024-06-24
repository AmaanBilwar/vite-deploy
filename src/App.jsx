import React from "react";
import logo from "./assets/headshot-image.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

//import pages

const App = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav>
          <Link to="/vite-deploy/" className="p-12">
            Home
          </Link>
          {" | "}
          <Link to="/vite-deploy/About" className="p-12">
            About
          </Link>
          {" | "}
          <Link to="/vite-deploy/Course" className="p-12">
            Course
          </Link>
          {" | "}
          <Link to="/vite-deploy/Resume" className="p-12">
            Resume
          </Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default App;
