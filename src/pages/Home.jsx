import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="sm:grid grid-cols-12 ">
        <div className="sm:col-span-2"></div>
        <div className=" sm:col-span-8">
          <div className="sm:grid grid-cols-2">
            <div className="flex justify-start">
              <h1 className="p-2">Amaan Bilwar</h1>
            </div>
            <div className="flex justify-end">
              <Link
                to="/vite-deploy/Home"
                className="text-decoration-line: none hover:underline p-2"
              >
                experience
              </Link>
              <Link
                to="/vite-deploy/About"
                className="text-decoration-line: none hover:underline p-2"
              >
                about
              </Link>
              <Link
                to="/vite-deploy/Course"
                className="text-decoration-line: none hover:underline p-2"
              >
                course
              </Link>
              <Link
                to="/vite-deploy/Resume"
                className="text-decoration-line: none hover:underline p-2"
              >
                resume
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end sm:col-span-2"></div>
      </div>
      <div className="sm:grid grid-cols-12">
        <div className="sm:col-span-2"></div>
        <div className="sm:col-span-8">
          <div className="grid grid-cols-2">
            <div className="flex  justify-start pl-2 pt-2">
              <h1>
                Work
                <br />
                <div className="pt-2">Honeywell intelligrated</div>
              </h1>
            </div>
            <div className="flex justify-end">
              <p></p>
            </div>
          </div>
        </div>

        <div className="col-span-2"></div>
      </div>
    </>
  );
};

export default Home;
