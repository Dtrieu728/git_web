import React, { useEffect } from "react";
import "../pages/home_page.css";
import SocialIcons from "../components/Icons/SocialIcons";
import Navbar from "../components/Navbar/navbar";
import Experience from "../components/Experience/experience";
import ResumeButton from "../Resume/ResumeButton";
import {
  FaJs,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMysql,
  SiTypescript,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/Project/projectSection";

const headShot = require("../images/Funnydusty.jpg");

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el) => observer.observe(el));

    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div id="Home" className="homePage">
        {/* Profile Card */}
        <div className="card profile-card">
          <img src={headShot} alt="Avatar" className="profile-image" />
          <div className="container">
            <h3>
              <b>Dustine Trieu</b>
            </h3>
            <p>ML Engineer • Full Stack Developer • AI Researcher</p>
            <SocialIcons />
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div id="Skills-Tech" className="bio">
            <h3 className="section-title">Skills and Technologies</h3>
            <div className="skills-container">
              <div className="skill">
                <FaJs size={35} color="#f7df1e" />
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <FaReact size={35} color="#61DAFB" />
                <span>React</span>
              </div>
              <div className="skill">
                <SiTypescript size={35} color="#3178C6" />
                <span>TypeScript</span>
              </div>
              <div className="skill">
                <FaPython size={35} color="#306998" />
                <span>Python</span>
              </div>
              <div className="skill">
                <FaJava size={35} />
                <span>Java</span>
              </div>
              <div className="skill">
                <SiCplusplus size={35} color="#00599C" />
                <span>C++</span>
              </div>
              <div className="skill">
                <SiC size={35} color="#00599C" />
                <span>C</span>
              </div>
              <div className="skill">
                <SiMysql size={35} color="#00599C" />
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>

        {/*Resume*/}
        <div>
          <h2> <b>Download my resume here</b></h2>
          <ResumeButton></ResumeButton>
        </div>

        {/* About Section */}
        <div className="about-section">
          <div id="About" className="bio">
            <h3 className="section-title">About Me</h3>
            <p>
                I'm Dustine Trieu, a Computer Science student at the University of Delaware with experience in machine learning, systems programming, and full-stack development. 
                My work focuses on building intelligent, data-driven applications that combine scalable software engineering with applied AI research.
            </p>
            <p>
                I’m currently conducting research in the THRAL Lab, where I develop machine learning pipelines and fine-tune locally hosted LLMs to
                 analyze behavioral data for early student-risk detection systems. My technical interests include 
                natural language processing, predictive modeling, distributed systems, and computationally intensive applications accelerated with GPU computing.
            </p>
            <p>
                I’ve built projects ranging from quantitative backtesting engines and MRI image reconstruction pipelines to real-time Spotify analytics platforms integrating OAuth authentication, REST APIs, 
                and interactive data visualization. I enjoy designing software that is both technically rigorous and impactful in real-world environments.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div id="Experience" className="experience-section">
          <div className="bio">
            <h3 className="section-title">Experience</h3>
            <Experience
              title="Undergraduate Researcher"
              organization="University of Delaware, THRAL lab"
              date="August 2024 - present"
              responsibilities={[
                "Conduct research on early warning systems for CS1 courses using behavioral and performance data to identify students at risk of poor outcomes.",
                "Collaborate with a research team to apply machine learning techniques that improve prediction of student performance and inform instructional interventions",
                "Implement generalized linear mixed models (GLMMs) to analyze predictive features such as assignment start time, syntax errors, and testing accuracy across time intervals",
              ]}
            />
            <Experience
              title="Intro to Computer Science 1 Teaching Assistant"
              organization="University of Delaware, Dept. Computer and Information Science"
              date="August 2023 - December 2023"
              responsibilities={[
                "Assisted in teaching and grading coursework for the introductory computer science class.",
                "Conducted office hours to help students with questions and assignments.",
                "Developed supplementary teaching materials to enhance student understanding of foundational programming concepts.",
              ]}
            />
            <Experience
              title="Intro to System Programming Teaching Assistant"
              organization="University of Delaware, Dept. Computer and Information Science"
              date="December 2023 - June 2024"
              responsibilities={[
                "Supported the teaching and evaluation of students in system programming.",
                "Provided one-on-one assistance to students during lab sessions and office hours.",
                "Collaborated with the professor to create lab exercises and programming assignments.",
              ]}
            />
            <Experience
              title="Computing Promotion Undergraduate Squad"
              organization="University of Delaware, Dept. Computer and Information Science"
              date="October 2023 - present"
              responsibilities={[
                "Promoted computing-related events and activities within the university community.",
                "Engaged with students to increase awareness and participation in computing initiatives.",
                "Assisted in organizing workshops, hackathons, and guest lectures.",
              ]}
            />
            <Experience
              title="University of Delaware College of Engineering Ambassador"
              organization="University of Delaware, College of Engineering"
              date="August 2024 - present"
              responsibilities={[
                "Supported the College of Engineering in planning and hosting engagement events for prospective students.",
                "Provided tours to prospective students and their families around campus.",
              ]}
            />
          </div>
        </div>

        {/* Projects Section */}
        <div id="Projects" className="projects-section">
          <ProjectsSection />
        </div>
      </div>
    </>
  );
}

export default HomePage;
