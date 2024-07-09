import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/headshot-image.png";

const About = () => {
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

      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          <div className="pl-2 pt-12">
            <h1>hi, नमस्ते</h1>
            <h2 className="pt-4">[he/him]</h2>
            <p className="pt-6"></p>
            i'm currently a computer engineering at university of cincinnati. i
            have a passion for coding, learning, and building and growing.
            <br />
            <p className="pt-6"></p>
            when i'm not programming you can catch me sleeping, watching
            streams, listening to music or scrolling through{" "}
            <Link
              to="https://www.google.com/search?sca_esv=495fc87c0ba59a8e&sca_upv=1&q=cute+puppies&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J03RPjGV0MznOJ6Likin94oGSh4l60tfPppA0C5BN3BoPIPZ4mO02288TWcC6nhc953r-iEY0Fnsc8p63NNuEo-_9lE3vw8_wlWQTOUoJiOaz96h-0idQ3ri-YSm1XM5OrXkpWcQFBioEOqIgZo9k77XCAGMfHUETSSqA9Acuma1rt2NRw&sa=X&ved=2ahUKEwjR2PCisfKGAxXeC3kGHfLUAbsQtKgLegQIGBAB&biw=950&bih=948&dpr=1"
              className="font-bold no-underline hover:underline"
              target="_blank"
            >
              cute dog pics.
            </Link>
            <br />
            <p className="pt-6"></p>i still have much more to learn, and i'm
            always open to exploring new opportunities,{" "}
            <Link
              to="https://www.linkedin.com/in/amaanbilwar/"
              className="font-bold no-underline hover:underline"
              target="_blank"
            >
              connect with me here
            </Link>
            {/* <a
              className="font-bold"
              target="_blank"
              href="https://www.linkedin.com/in/amaanbilwar/"
            >
              connect with me here
            </a> */}
            .
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};

export default About;
