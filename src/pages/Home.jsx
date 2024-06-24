import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/headshot-image.png";
const Home = () => {
  return (
    <>
      <div>
        <section>
          <div className="grid grid-cols-6">
            <div></div>
            <div>
              <section>
                <h1 className="flex justify-start pl-4 text-2xl font-semibold">
                  Amaan Bilwar
                </h1>
                <br />
                <p className="flex justify-start">
                  <img
                    src={Logo}
                    alt="headshot"
                    className="mr-4 h-48 transform rounded-full p-2 shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
                  />
                </p>
              </section>
            </div>
            <div></div>
            <div></div>
            <div>
              <section className="flex justify-end pt-12">
                <ul className="grid justify-items-center pr-12">
                  <li className="p-2">
                    <Link
                      to="/vite-deploy/Home"
                      className="text-decoration-line: none p-2 hover:underline"
                    >
                      experience
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/vite-deploy/About"
                      className="text-decoration-line: none p-2 hover:underline"
                    >
                      about
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/vite-deploy/Course"
                      className="text-decoration-line: none p-2 hover:underline"
                    >
                      course
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/vite-deploy/Resume"
                      className="text-decoration-line: none p-2 hover:underline"
                    >
                      resume
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div></div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <hr />

      <div className="grid-cols-12 sm:grid">
        <div className="sm:col-span-2"></div>
        <div className="sm:col-span-8">
          <div className="grid grid-cols-2">
            <div className="flex justify-start pl-2 pt-12">
              <h1>
                WORK
                <br />
                <div className="pt-6">
                  built a framework architecture @ Honeywell intelligrated
                </div>
                <div className="text-slate-500">
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
                  worked on an electric vehicle's powertrain software @ Bearcat
                  Motorsports
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
              <div className="flex justify-start">
                <h1>
                  PROJECTS <br /> <p className="pt-4">YT-sentiment-analysis</p>
                  <p className="text-slate-500">
                    express, node, react, youtube api, flask, openai, mongodb,
                    tailwind
                  </p>
                  <p className="pt-4">spoti-helper</p>
                  <p className="text-slate-500">
                    express, node, react, spotify api, flask, monogdb, tailwind
                  </p>
                </h1>
              </div>
            </div>
            <div className="pt-12">
              <div className="flex justify-end">
                <h1>
                  <p className="pt-10"></p>
                  <p>
                    <a
                      className="text-decoration-line: none m-2 hover:underline"
                      target="_blank"
                      href="https://github.com/AmaanBilwar/"
                    >
                      live
                    </a>
                    <a
                      className="text-decoration-line: none hover:underline"
                      target="_blank"
                      href="https://github.com/AmaanBilwar/"
                    >
                      github
                    </a>
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};

export default Home;
