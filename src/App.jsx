import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Document from "./assets/resume.pdf";

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
            className="transform rounded-full bg-white pb-4 pl-6 pr-6 pt-4 text-black duration-200 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            Home
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/Contact"
            className="transform rounded-full bg-white pb-4 pl-6 pr-6 pt-4 text-black duration-200 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            Contact
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/About"
            className="transform rounded-full bg-white pb-4 pl-6 pr-6 pt-4 text-black duration-200 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            About
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/Course"
            className="transform rounded-full bg-white pb-4 pl-6 pr-6 pt-4 text-black duration-200 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            Course
          </Link>
          {" | "}
          <Link
            to="/vite-deploy/Resume"
            className="transform rounded-full bg-white pb-4 pl-6 pr-6 pt-4 text-black duration-200 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            <button onClick={resumeFunction}>Resume</button>
          </Link>
          <a href="../resume.pdf"></a>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default App;
