import React from "react";
import Logo from "../assets/headshot-image.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div>
        <section>
          <div className="grid grid-cols-6">
            <div></div>
            <div>
              <section>
                <h1 className="flex justify-start pl-4 pt-2 text-2xl font-semibold">
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
                      className="text-decoration-line: p-2 text-gray-950 hover:underline"
                    >
                      experience
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/vite-deploy/About"
                      className="text-decoration-line: none p-2 underline"
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

      <div className="flex justify-center pb-6 text-2xl">CONTACT ME</div>
      <div className="flex justify-center">
        <ul>
          <li className="flex justify-center pb-4 pt-4">
            <a target="_blank" href="mailto:bilwarad@mail.uc.edu">
              Mail
            </a>
          </li>
          <li className="flex justify-center pb-4 pt-4">
            <a target="_blank" href="https://www.linkedin.com/in/amaanbilwar">
              LinkedIn
            </a>
          </li>
          <li className="flex justify-center pb-4 pt-4">
            <a target="_blank" href="https://www.github.com/amaanbilwar">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
