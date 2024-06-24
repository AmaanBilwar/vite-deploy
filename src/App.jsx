import React from "react";
import logo from "./assets/headshot-image.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Document from "./assets/resume.pdf";

//import pages

const App = () => {
  const resumeFunction = () => {
    window.open(Document);
  };

  return (
    <>
      <div className="flex justify-center p-4">
        <nav>
          <Link
            to="/vite-deploy/"
            className="
          text-black hover:text-white bg-white hover:bg-black
          pl-6 pr-6 pt-4 pb-4 ease-in-out duration-200 transform hover:-translate-y-1
          rounded-full"
          >
            Home
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/About"
            className="
          text-black hover:text-white bg-white hover:bg-black
          pl-6 pr-6 pt-4 pb-4 ease-in-out duration-200 transform hover:-translate-y-1
          rounded-full"
          >
            About
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/Course"
            className="
          text-black hover:text-white bg-white hover:bg-black
          pl-6 pr-6 pt-4 pb-4 ease-in-out duration-200 transform hover:-translate-y-1
          rounded-full"
          >
            Course
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/Resume"
            className="
          text-black hover:text-white bg-white hover:bg-black
          pl-6 pr-6 pt-4 pb-4 ease-in-out duration-200 transform hover:-translate-y-1
          rounded-full"
          >
            <button onClick={resumeFunction}>Resume</button>
          </Link>
          <a href="/resume.pdf"></a>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default App;
