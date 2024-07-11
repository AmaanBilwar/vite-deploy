import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/headshot-image.png";
import Logo2 from "../assets/linkedin.png";
import Logo3 from "../assets/github.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    // timer updation logic
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
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
                      className="text-decoration-line: p-2 text-gray-950 underline"
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
                      to="/vite-deploy/Contact"
                      className="text-decoration-line: none p-2 hover:underline"
                    >
                      contact
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

      <div className="flex justify-center">
        <span className="time">{time.toLocaleTimeString()}</span>
      </div>
      <br />

      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <div className="flex justify-center pb-6 pt-4 text-2xl">WORK</div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start text-2xl">Honeywell</div>
        </div>
        <div className="flex justify-end text-slate-400">
          Jan 2024 - April 2024
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start pb-4 pt-4 text-xl text-slate-600">
            Software Engineering Intern
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start">
            <ul className="list-disc">
              <li>
                Revamped framework architecture introducing essential versioning
                protocols for Honeywell’s multifaceted tech environment, while
                collaborating with interns across different time zones.
              </li>
              <li>
                Directed reference architecture development, smoothing new
                client integration amid prior maintenance gaps, and collaborated
                with advanced software engineers to troubleshoot and resolve
                emerging issues.
              </li>
              <li>
                Achieved experience in Docker, Spring Boot, Java, unit testing,
                RabbitMQ, Hazelcast, and PostgreSQL within Honeywell’s intricate
                ecosystem, highlighting adaptability and skill acquisition.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-12">
        <div></div>
        <div>
          <div className="flex justify-start text-2xl">
            University of Cincinnati
          </div>
        </div>
        <div className="flex justify-end text-slate-400">
          Sept 2023 - Dec 2023
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start pb-4 pt-4 text-xl text-slate-600">
            Research Assistant - Software Developer
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start">
            <ul className="list-disc">
              <li>
                Developed a Node.js and Express web app to enhance vocal
                training for non-binary users, evidenced by improved pitch
                correction and positive user feedback.
              </li>
              <li>
                Accomplished real-time pitch analysis for vocal transitioning,
                as measured by accurate pitch detection and user progress
                tracking, by implementing robust backend algorithms in Node.js.
              </li>
              <li>
                Accomplished improved user engagement and usability, as measured
                by consistent user interaction and positive feedback, by
                contributing to front-end development and user interface design
                in React.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <div className="flex justify-center pb-8 pt-12 text-2xl">PROJECTS</div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start text-2xl">
            YT-SENTIMENT-ANALYSIS
          </div>
        </div>
        <div className="flex justify-end text-slate-400">
          <Link
            to="https://github.com/AmaanBilwar/yt-senti-03"
            className="no-underline hover:underline"
          >
            Github
          </Link>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start">
            <ul>
              <li className="text-slate-400">
                Flask, Node.js, PostgreSQL, Docker
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-6">
        <div></div>
        <div>
          <div className="flex justify-start text-2xl">JollyLLB</div>
        </div>
        <div className="flex justify-end text-slate-400">
          <Link
            to="https://github.com/AmaanBilwar/JollyLLb"
            className="no-underline hover:underline"
          >
            Github
          </Link>
          <Link
            target="_blank"
            to="https://jollyllb-307a945fa636.herokuapp.com/"
            className="pl-2 no-underline hover:underline"
          >
            Live
          </Link>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start">
            <ul>
              <li className="text-slate-400">
                React, Node.js, Express, Redis, Docker
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-12">
        <div></div>
        <div>
          <div className="flex justify-start text-2xl">Spoti-Helper</div>
        </div>
        <div className="flex justify-end text-slate-400">
          <Link
            to="https://github.com/AmaanBilwar/spoti-helper"
            className="no-underline hover:underline"
          >
            Github
          </Link>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start">
            <ul>
              <li className="text-slate-400">
                React, Node.js, Express, MongoDB
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <div className="flex justify-center pb-4 pt-12 text-2xl">
          TECHNICAL SKILLS
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <div className="flex justify-center text-xl">Languages</div>
        <div></div>
      </div>

      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center pb-6 text-slate-600">
          Java, Python, Golang, JavaScript, C/C++, HTML/CSS, SQL, R
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <div className="flex justify-center text-xl">Developer Tools</div>
        <div></div>
      </div>

      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center pb-6 text-slate-600">
          Linux, Docker, Redis, Firebase, IntelliJ, Git, Google Cloud Platform,
          Cloudflare
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div></div>
        <div className="flex justify-center text-xl">Frameworks</div>
        <div></div>
      </div>

      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center pb-6 text-slate-600">
          React, Node.js, TypeScript, Flask, FastAPI
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center pt-6 text-2xl">LEADERSHIP</div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-12">
        <div></div>
        <div>
          <div className="flex justify-start text-2xl">Bearcat Motorsports</div>
        </div>
        <div className="flex justify-end text-slate-400">
          <Link
            to="https://github.com/AmaanBilwar/spoti-helper"
            className="no-underline hover:underline"
          >
            Github
          </Link>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div></div>
        <div>
          <div className="flex justify-start">
            <ul>
              <li>Formula Electric SAE Team</li>
              <li className="text-slate-600">Powertrain and Electronics</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div></div>
      </div>

      <hr />
      <br />
      <br />
      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center">
          <a target="_blank" href="https://www.linkedin.com/in/amaanbilwar">
            <img src={Logo2} className="h-12 w-24" alt="linkedin image" />
          </a>
          <a target="_blank" href="https://www.github.com/amaanbilwar">
            <img src={Logo3} className="h-12 w-12" alt="linkedin image" />
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
