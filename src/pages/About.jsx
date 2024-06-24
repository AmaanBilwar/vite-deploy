import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
              className="no-underline hover:underline font-bold"
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
