import React, { useEffect, useRef, useState } from "react";
import "../pages/home_page.css";
import SocialIcons from "../components/Icons/SocialIcons";
import Navbar from "../components/Navbar/navbar";
import Experience from "../components/Experience/experience";
import ResumeButton from "../Resume/ResumeButton";
import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/Project/projectSection";
import {
  FaJs, FaReact, FaPython, FaJava, FaDocker
} from "react-icons/fa";
import {
  SiMysql, SiTypescript, SiCplusplus,
} from "react-icons/si";
import {
  DiDjango,DiLinux,DiPostgresql
} from "react-icons/di";
import { title } from "process";


const headShot = require("../images/Funnydusty.jpg");

const SKILLS = [
  { icon: <FaJs     size={28} color="#f7df1e" />, label: "JavaScript" },
  { icon: <FaReact  size={28} color="#61DAFB" />, label: "React" },
  { icon: <SiTypescript size={28} color="#3178C6" />, label: "TypeScript" },
  { icon: <FaPython size={28} color="#306998" />, label: "Python" },
  { icon: <FaJava   size={28} />,                  label: "Java" },
  { icon: <SiCplusplus size={28} color="#00599C" />, label: "C++" },
  { icon: <SiMysql  size={28} color="#00599C" />,  label: "SQL" },
  {icon: <DiDjango  size={28} color="#00599C" />,  label: "Django" },
  {icon: <DiPostgresql  size={28} color="#00599C" />,  label: "Postgresql" },
  {icon: <DiLinux  size={28} color="#00599C" />,  label: "Linux" },
  {icon: <FaDocker  size={28} color="#00599C" />,  label: "Docker" },
];

const EXPERIENCES = [
  {
    title: "Software Engineer",
    organization: "General Dynamics Mission Systems",
    date: "August 2026 - Present",
    responsibilities: []
  },
  {
    title: "Undergraduate Researcher",
    organization: "University of Delaware, THRAL Lab",
    date: "August 2025 – May 2026",
    responsibilities: [
      "Conduct research on early warning systems for CS1 courses using behavioral and performance data to identify students at risk of poor outcomes.",
      "Collaborate with a research team to apply machine learning techniques that improve prediction of student performance and inform instructional interventions.",
      "Implement generalized linear mixed models (GLMMs) to analyze predictive features such as assignment start time, syntax errors, and testing accuracy across time intervals.",
    ],
  },
   {
    title: "Computing Promotion Undergraduate Squad",
    organization: "University of Delaware, Dept. Computer and Information Science",
    date: "October 2023 – May 2026",
    responsibilities: [
      "Promoted computing-related events and activities within the university community.",
      "Engaged with students to increase awareness and participation in computing initiatives.",
      "Assisted in organizing workshops, hackathons, and guest lectures.",
    ],
  },
    {
    title: "College of Engineering Ambassador",
    organization: "University of Delaware, College of Engineering",
    date: "August 2024 – May 2026",
    responsibilities: [
      "Supported the College of Engineering in planning and hosting engagement events for prospective students.",
      "Provided tours to prospective students and their families around campus.",
    ],
  },
  {
    title: "Intro to System Programming Teaching Assistant",
    organization: "University of Delaware, Dept. Computer and Information Science",
    date: "December 2023 – June 2024",
    responsibilities: [
      "Supported the teaching and evaluation of students in system programming.",
      "Provided one-on-one assistance to students during lab sessions and office hours.",
      "Collaborated with the professor to create lab exercises and programming assignments.",
    ],
  },
   {
    title: "Intro to Computer Science 1 Teaching Assistant",
    organization: "University of Delaware, Dept. Computer and Information Science",
    date: "August 2023 – December 2023",
    responsibilities: [
      "Assisted in teaching and grading coursework for the introductory computer science class.",
      "Conducted office hours to help students with questions and assignments.",
      "Developed supplementary teaching materials to enhance student understanding of foundational programming concepts.",
    ],
  },
 
];

/* Reusable scroll-reveal hook */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return { ref, visible };
}

/* Section wrapper with eyebrow label */
const Section: React.FC<{
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, eyebrow, title, children, className = "" }) => {
  const { ref, visible } = useFadeIn();
  return (
    <section
      id={id}
      ref={ref}
      className={`page-section${visible ? " page-section--visible" : ""} ${className}`}
    >
      <div className="section-header">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="section-heading">{title}</h2>
      </div>
      {children}
    </section>
  );
};

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <main id="Home" className="home-page">

        {/*  Profile  */}
        <Section eyebrow="Introduction" title="" className="profile-section">
          <div className="profile-card">
            <div className="profile-image-wrap">
              <img src={headShot} alt="Dustine Trieu" className="profile-image" />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Dustine Trieu</h3>
              <p className="profile-roles">ML Engineer · Full Stack Developer · Software Engineer</p>
              <SocialIcons />
              <div className="profile-resume">
                <ResumeButton />
              </div>
            </div>
          </div>
        </Section>

        {/*  Skills  */}
        <Section id="Skills-Tech" eyebrow="Toolbox" title="Skills &amp; Technologies">
          <div className="skills-grid">
            {SKILLS.map(({ icon, label }) => (
              <div key={label} className="skill-chip">
                <span className="skill-icon">{icon}</span>
                <span className="skill-label">{label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/*  About  */}
        <Section id="About" eyebrow="Background" title="About Me">
          <div className="about-body">
            <p>
              I'm a Computer Science graduate from the University of Delaware with experience in machine
              learning, systems programming, and full-stack development. My work focuses on building
              intelligent, data-driven applications that combine scalable software engineering with
              applied AI research.
            </p>
            <p>
              I have assisted in research at the THRAL Lab, where I developed machine learning
              pipelines and fine-tuned locally hosted LLMs to analyze behavioral data for early
              student-risk detection systems. My technical interests span natural language processing,
              predictive modeling, distributed systems, and GPU-accelerated computing.
            </p>
            <p>
              I've built projects ranging from quantitative backtesting engines and MRI image
              reconstruction pipelines to real-time Spotify analytics platforms integrating OAuth
              authentication, REST APIs, and interactive data visualization.
            </p>
          </div>
        </Section>

        {/*  Experience  */}
        <Section id="Experience" eyebrow="Career" title="Experience">
          <div className="timeline">
            {EXPERIENCES.map((exp) => (
              <Experience key={exp.title} {...exp} />
            ))}
          </div>
        </Section>

        {/*  Projects  */}
        <Section id="Projects" eyebrow="Selected work" title="Projects">
          <ProjectsSection />
        </Section>

      </main>
    </>
  );
}

export default HomePage;