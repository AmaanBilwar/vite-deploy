import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/headshot-image.png";

const Course = () => {
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
                      className="text-decoration-line: none p-2 hover:underline"
                    >
                      about
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      to="/vite-deploy/Course"
                      className="text-decoration-line: none p-2 underline"
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
      <div>
        <h1 className="flex justify-center pb-4 pt-4 text-2xl">
          Links to all assignments during this course
        </h1>
        <p className="flex justify-center">
          <Link
            target="_blank"
            to="https://github.com/AmaanBilwar/waph-bilwarad/tree/main/labs"
            className="m-2 no-underline hover:underline"
          >
            {" "}
            Labs
          </Link>
          <Link
            target="_blank"
            to="https://github.com/AmaanBilwar/waph-bilwarad/tree/main"
            className="m-2 no-underline hover:underline"
          >
            Hackathons
          </Link>
          <Link
            to="https://github.com/AmaanBilwar/vite-deploy"
            className="m-2 no-underline hover:underline"
            target="_blank"
          >
            Projects
          </Link>
          <Link
            to="https://github.com/AmaanBilwar/waph-bilwarad/tree/main"
            className="m-2 no-underline hover:underline"
            target="_blank"
          >
            Team Projects
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex justify-center">
          <Link to="https://uc.instructure.com/courses/1692942" target="_blank">
            <section className="m-12 rounded-lg bg-white p-12 text-center text-black shadow-none transition duration-300 hover:bg-black hover:text-white hover:shadow-md">
              <h1>Course Description</h1>
              <p className="pb-0 pl-20 pr-20 pt-2">
                "Embark on a comprehensive journey into web application
                development and security in this course.""
                <br />
                <p className="pt-2">
                  Click to learn more
                  <FontAwesomeIcon icon={faArrowPointer} className="pl-2" />
                </p>
              </p>
            </section>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="https://uc.instructure.com/courses/1692942" target="_blank">
            <section className="m-12 rounded-lg bg-white p-12 text-center text-black shadow-none transition duration-300 hover:bg-black hover:text-white hover:shadow-md">
              <h1>Topics</h1>
              <p className="pl-20 pr-20 pt-2">
                "Explore a diverse array of topics that lay the foundation for
                both developing and securing web applications in this course."
                <br />
                <p className="pt-2">
                  Click to learn more
                  <FontAwesomeIcon icon={faArrowPointer} className="pl-2" />
                </p>
              </p>
            </section>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-1 m-12"></div>
        <div className="col-span-10">
          <Link to="https://uc.instructure.com/courses/1692942" target="_blank">
            <section className="m-12 rounded-lg bg-white pb-20 pl-12 pr-12 pt-20 text-center text-black shadow-none transition duration-300 hover:bg-black hover:text-white hover:shadow-md">
              <h1>Course Goals and Objectives</h1>
              <p className="pl-20 pr-20 pt-2">
                "By the end of this course, students will achieve the following
                goals and objectives:"
                <br />
                <p className="pt-2">
                  Click to learn more
                  <FontAwesomeIcon icon={faArrowPointer} className="pl-2" />
                </p>
              </p>
            </section>
          </Link>
        </div>
        <div className="col-span-1 m-12"></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex justify-center">
          <Link to="https://uc.instructure.com/courses/1692942" target="_blank">
            <section className="m-12 rounded-lg bg-white p-12 text-center text-black shadow-none transition duration-300 hover:bg-black hover:text-white hover:shadow-md">
              <h1>Course Outcomes</h1>
              <p>
                "Upon successful completion of this course, students will
                achieve the following outcomes:"
              </p>
              <br />
              <p className="pt-2">
                Click to learn more
                <FontAwesomeIcon icon={faArrowPointer} className="pl-2" />
              </p>
            </section>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="https://uc.instructure.com/courses/1692942" target="_blank">
            <section className="m-12 rounded-lg bg-white p-12 text-center text-black shadow-none transition duration-300 hover:bg-black hover:text-white hover:shadow-md">
              <h1>Textbook</h1>
              <p>
                "Course materials will include lecture handouts and recommended
                readings, with key resources listed below:"
              </p>
              <br />
              <p className="pt-2">
                Click to learn more
                <FontAwesomeIcon icon={faArrowPointer} className="pl-2" />
              </p>
            </section>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
