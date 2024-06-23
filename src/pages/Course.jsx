import React from "react";

const Course = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-around align-center">
          <h1>
            Links to all the Labs, assignments, projects and Hackathons.
            <div className="flex justify-center">
              <ul>
                <li>
                  <a
                    className="no-underline hover:underline"
                    target="_blank"
                    href="https://github.com/AmaanBilwar/waph-bilwarad/tree/main/labs"
                  >
                    Labs
                  </a>
                </li>
                <li>
                  <a
                    className="no-underline hover:underline"
                    target="_blank"
                    href=""
                  >
                    Hackathons
                  </a>
                </li>
              </ul>
            </div>
          </h1>
        </div>
        <div></div>
      </div>

      <div className="text-2xl flex justify-center">
        Welcome to the Course Information Page
      </div>
      <div>
        <h1 className="flex justify-center align-center pt-4">
          Course Description
        </h1>
        <p className="flex justify-center pl-80 pr-80 pt-6 pb-6">
          In this course, students will study basic web application development
          with front-end (HTML5, JavaScript, CSS) and back-end (PHP/MySQL). Web
          application vulnerabilities and attacks will be introduced and
          explored with hands-on exercises on the range. Secure programming
          principles and practices will be introduced to avoid potential web
          application vulnerabilities and attacks. (Recommended) Prerequisites:
          Intermediate programming skills in any language.
        </p>
      </div>
      <div>
        <h1 className="flex justify-center align-center pt-4">
          Topics (Tentative):
        </h1>
        <p className="flex justify-center pb-6">
          <ul className="list-disc">
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
        </p>
      </div>
      <div>
        <h1 className="flex justify-center align-center pt-4">
          Course Goals and Objectives:
        </h1>
        <p className="flex justify-center pb-6">
          Students will have the ability to:
        </p>
        <p className="flex justify-center pl-80 pr-80 pb-6">
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
        </p>
      </div>
      <div>
        <h1 className="flex justify-center align-center pt-4">
          Course Outcomes:
        </h1>
        <p className="flex justify-center pb-6">
          Upon successful completion of this course, students will be able to:
        </p>
        <p className="flex justify-center pb-6">
          <ul className="list-disc">
            <li>
              design, implement, and evaluate a web-based solution to meet a
              given set of computing requirements in the context of the
              program’s discipline.
            </li>
            <li>
              understand the principle aspects of concepts of web application
              security
            </li>
            <li>
              identify and discuss the types of security threats and attacks in
              web applications and practical experience with hands-on exercises
            </li>
            <li>
              adopt corresponding countermeasures to identified threats in web
              applications and argue their effectiveness
            </li>
            <li>
              apply practical knowledge of security in designing and
              implementing web applications with contemporary technologies
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h1 className="flex justify-center align-center pt-4">Textbook</h1>
        <p className="flex justify-center pl-80 pr-80">
          There is no required textbook for this course. Lecture handouts are
          provided for every class. A good reference book (Free PDF online):
          “Learning PHP, MySQL & JavaScript: A Step-by-Step Guide to Creating
          Dynamic Websites,” Robin Nixon, O'Reilly Media, 6th Edition (2021).
          Additional readings will be posted correspondingly before lectures.
          Full syllabus and schedule are live on:{" "}
        </p>
        <p className="flex justify-center pl-80 pr-80">
          <a
            target="_blank"
            className="no-underline hover:underline"
            href="https://mailuc-my.sharepoint.com/:w:/g/personal/phungph_ucmail_uc_edu/EXzBMM1n8clNqqCARzpcEd0BRlsYC1fgwBFXIc_2BXNG6Q?e=V13cyc"
          >
            this website
          </a>
        </p>
      </div>
    </>
  );
};

export default Course;
