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
            <div className="flex  justify-start pl-2 pt-12">
              <h1>
                WORK
                <br />
                <div className="pt-6">
                  built a framework architecture @ Honeywell intelligrated
                </div>
                <div className=" text-slate-500 ">
                  spring 2024 - java, springboot, docker, postgresql, rabbitmq,
                  hazelcast
                </div>
                <div className="pt-4">
                  wrote backend for a voice analysis web app @ University of
                  Cincinnati
                </div>
                <div className="text-slate-500">
                  fall 2023 - flask, golang, mongodb, reactjs, node
                </div>
                <div className="pt-4">
                  worked on bearcat electric vehicle powertrain software -
                  matlab, new eagle
                </div>
                <div className="text-slate-500">
                  {" "}
                  present - matlab, new eagle GCM48{" "}
                </div>
              </h1>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>

        <div className="col-span-2"></div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          <div className="grid grid-cols-2">
            <div className="pt-12">
              <h1>yt-sentiment analysis</h1>
            </div>
            <div>2</div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};

export default Home;
