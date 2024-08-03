import React, { useEffect, useState } from 'react';
import '../pages/home_page.css';
import SocialIcons from '../components/SocialIcons';
import Navbar from '../components/navbar';
import Experience from '../components/experience';
import { FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript} from 'react-icons/si';
import { SiCplusplus, SiC } from 'react-icons/si'; 
const headShot = require('../images/Funnydusty.jpg');



function HomePage() {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => observer.observe(el));

    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <div  id ="Home" className="homePage" style={{ backgroundColor: 'white' }}>
        <div className="card" style={{ backgroundColor: 'white', width: '40%' }}>
          <img src={headShot} alt="Avatar" style={{ width: '100%' }} />
          <div className="container">
            <h3><b>Dustine Trieu</b></h3>
            <p>B.S Computer Science</p>
            <p>B.A Asian Studies</p>
            <SocialIcons />
          </div>
        </div>
        <div className="additionalContainerWrapper">
          <div>
            <div id= "About" className="bio fade-in" style={{ fontSize: '35px' }}>
              <h3 style={{ textAlign: 'center' }}><b>About Me</b></h3>
              <p>Hello! I'm Dustine Trieu, a junior at the University of Delaware, where I am pursuing a Bachelor of Science in Computer Science with a concentration in Artificial Intelligence and Robotics, alongside a Bachelor of Arts in Asian Studies. My academic journey is fueled by a deep passion for exploring the cutting-edge realms of AI and robotics, and I am eager to contribute to advancements in these fields.</p>
              <p>In addition to my majors, I am also minoring in Mathematics. This combination of studies allows me to blend technical expertise with a broader cultural and analytical perspective.</p>
              <p>Through my coursework and projects, I strive to develop innovative solutions that can make a significant impact on both technology and society. I am excited about the opportunities ahead and look forward to connecting with others who share my enthusiasm for AI, robotics, and interdisciplinary learning.</p>
            </div>
          </div>

          <div>
            <div id="Skillss-Tech" className="bio fade-in" style={{ fontSize: '30px' }}>
              <h3 style={{ textAlign: 'center' }}><b>Skills and Technologies</b></h3>
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
                {/* Add more skills with icons as needed */}
              </div>
            </div>
          </div>
          
          <div id="Experience" className="additionalContainer fade-in">
            <div className="bio" style={{ fontSize: '25px' }}>
              <button onClick={() => setShowExperience(!showExperience)}>
                <h3 style={{fontSize:"35px"}}><b>Experience</b></h3>
              </button>
              {(
                <>
                  <Experience
                    title="Intro to Computer Science 1 Teaching Assistant"
                    organization="University of Delaware"
                    date="August 2023 - December 2023"
                    responsibilities={[
                      'Assisted in teaching and grading coursework for the introductory computer science class.',
                      'Conducted office hours to help students with questions and assignments.',
                      'Developed supplementary teaching materials to enhance student understanding of foundational programming concepts.',
                    ]}
                  />
                  <Experience
                    title="Intro to System Programming Teaching Assistant"
                    organization="University of Delaware"
                    date="December 2023 - June 2024"
                    responsibilities={[
                      'Supported the teaching and evaluation of students in system programming.',
                      'Provided one-on-one assistance to students during lab sessions and office hours.',
                      'Collaborated with the professor to create lab exercises and programming assignments.',
                    ]}
                  />
                  <Experience
                    title="Computing Promotion Undergraduate Squad"
                    organization="University of Delaware"
                    date="October 2023 - present"
                    responsibilities={[
                      'Promoted computing-related events and activities within the university community.',
                      'Engaged with students to increase awareness and participation in computing initiatives.',
                      'Assisted in organizing workshops, hackathons, and guest lectures.',
                    ]}
                  />
                </>
              )}
            </div>
          </div>

          <div id="Projects" className="additionalContainer fade-in" style={{marginTop:"200px"}}>
            <div className="bio" style={{ fontSize: '22px'}}>
              <button onClick={() => setShowProjects(!showProjects)}>
                <h2 style={{ textAlign: 'center' }}><b>Projects</b></h2>
              </button>
              {(
                <ul style={{fontSize:"25px"}}>
                  <li>Career Quiz using OpenAI</li>
                  <li>Gender Inclusive Language project from Hackathon</li>
                  <li>Spotify Dashboard</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;