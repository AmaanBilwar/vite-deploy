import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="sm:grid grid-cols-12 ">
        <div className="bg-pink-200 sm:col-span-2">1</div>
        <div className="bg-sky-200 sm:col-span-8">
          <div className="sm:grid grid-cols-2">
            <div className="flex justify-start">
              <h1 className="p-2">Amaan Bilwar</h1>
            </div>
            <div className="flex justify-end">
              <Link to="/vite-deploy/Home" className="p-2">
                experience
              </Link>
              <Link to="/vite-deploy/About" className="p-2">
                about
              </Link>
              <Link to="/vite-deploy/Course" className="p-2">
                course
              </Link>
              <Link to="/vite-deploy/Resume" className="p-2">
                resume
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end bg-red-200 sm:col-span-2">3</div>
      </div>
    </>
  );
};

export default Home;
