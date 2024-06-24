import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  const thisWebsiteFunction = () => {
    <Link to="https://mailuc-my.sharepoint.com/:w:/g/personal/phungph_ucmail_uc_edu/EXzBMM1n8clNqqCARzpcEd0BRlsYC1fgwBFXIc_2BXNG6Q?e=V13cyc"></Link>;
  };

  return (
    <>
      <div>
        <h1 className="text-2xl flex justify-center pt-4">
          Links to all assignments during this course
        </h1>
        <p className=" flex justify-center">
          <Link
            to="https://github.com/AmaanBilwar/waph-bilwarad/tree/main/labs"
            className="m-2"
          >
            Labs
          </Link>
          <Link
            to="https://github.com/AmaanBilwar/waph-bilwarad/tree/main"
            className="m-2"
          >
            Hackathons
          </Link>
          <Link to="https://github.com/AmaanBilwar/vite-deploy" className="m-2">
            Projects
          </Link>
          <Link
            to="https://github.com/AmaanBilwar/waph-bilwarad/tree/main"
            className="m-2"
          >
            Team Projects
          </Link>
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-3 gap-4">
        <div className="p-4 m-4 h-2/3">
          <h1 className="flex justify-center">Course Description</h1>
          <p className="flex justify-center">
            In this course, students will study basic web application
            development with front-end (HTML5, JavaScript, CSS) and back-end
            (PHP/MySQL).
          </p>

          <p>
            Web application vulnerabilities and attacks will be introduced and
            explored with hands-on exercises on the range.
          </p>

          <p>
            Secure programming principles and practices will be introduced to
            avoid potential web application vulnerabilities and attacks.
          </p>

          <p className="font-semibold">
            (Recommended) Prerequisites: Intermediate programming skills in any
            language.
          </p>
        </div>
        <div></div>
        <div className="p-4 m-4 h-2/3">
          <h1>Topics</h1>
          <ul className=" list-disc">
            <li>The Web and Web Applications</li>
            <li>Client-side Web Development with HTML5, CSS, and JavaScript</li>
            <li>
              Server-side Web Application Development with PHP and Database
              (MySQL)
            </li>
            <li>Version control (git)</li>
            <li>
              Web Application Security: Vulnerabilities and Attacks with
              Hands-on Exercises
            </li>
            <li>Secure Web Programming Principles and Practices</li>
          </ul>
        </div>
        <div></div>
        <div className="p-4 m-4">
          <h1 className="flex justify-center">Course Goals and Objectives</h1>
          <p className="flex justify-center">
            Students will have the ability to:
          </p>
          <ul className="list-disc">
            <li>
              obtain the ability and skills to effectively use state-of-the-art
              techniques in web application development and security tools for
              the analysis, design, and implementation of secure web systems
            </li>
            <li>
              enhance students’ programming skills to develop secure, robust,
              sustainable software products
            </li>
            <li>
              establish security analysis skills to identify and avoid potential
              web vulnerabilities
            </li>
            <li>
              identify the types of security threats and perform attacks in web
              applications and adopt corresponding countermeasures to prevent
              such attacks
            </li>
            <li>
              obtain the ability and skills to apply practical knowledge of
              security in designing and implementing web applications with
              contemporary programming technologies.
            </li>
          </ul>
        </div>
        <div></div>
        <div className="p-4 m-4">
          <h1 className="flex justify-center">Course Outcomes</h1>
          <p className="flex justify-center">
            Upon successful completion of this course, they will be able to:
          </p>
          <p className="flex justify-center">
            design, implement, and evaluate a web-based solution to meet a given
            set of computing requirements in the context of the program’s
            discipline.
          </p>
          <p>
            understand the principle aspects of concepts of web application
            security
          </p>
          <p>
            identify and discuss the types of security threats and attacks in
            web applications and practical experience with hands-on exercises
          </p>
          <p>
            adopt corresponding countermeasures to identified threats in web
            applications and argue their effectiveness
          </p>
          <p>
            apply practical knowledge of security in designing and implementing
            web applications with contemporary technologies
          </p>
        </div>
        <div></div>
        <div className="p-4 m-4">
          <h1 className="flex justify-center">Textbook</h1>
          <ul className="list-disc">
            <li>
              There is no required textbook for this course. Lecture handouts
              are provided for every class.
            </li>
            <li>
              A good reference book (Free PDF online): “Learning PHP, MySQL &
              JavaScript: A Step-by-Step Guide to Creating Dynamic Websites,”
              Robin Nixon, O'Reilly Media, 6th Edition (2021).
            </li>
            <li>
              Additional readings will be posted correspondingly before
              lectures. Full syllabus and schedule are live on{" "}
              <Link
                to="https://mailuc-my.sharepoint.com/:w:/g/personal/phungph_ucmail_uc_edu/EXzBMM1n8clNqqCARzpcEd0BRlsYC1fgwBFXIc_2BXNG6Q?e=V13cyc"
                className="font-semibold no-underline hover:underline"
              >
                this website
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Course;
