import React from 'react';
import VideoSection from '../components/videoSection'; 
const careerQuiz = require('../images/careerquiz1.png');

const ProjectsSection = () => {
  return (
    <div id="Projects" className="additionalContainer fade-in" style={{ marginTop: '200px' }}>
      <div className="bio" style={{ fontSize: '22px' }}>
        <h2 style={{ textAlign: 'center' }}><b>Projects</b></h2>
        <div className="project-card">
          <h3 style={{ textAlign: 'center' ,fontSize:"30px"}}>Career Quiz using OpenAI</h3>
          <p style={{ textAlign: 'center', }}>Built a quiz that helps the user determine the best career choice.</p>
          <div className="image-container">
            <img src={careerQuiz} alt="career" />
          </div>
        </div>
        <div className="project-card">
          <h3 style={{ textAlign: 'center',marginTop: '100px' ,fontSize:"30px" }}>Gender Inclusive Language Project from Hackathon</h3>
          <VideoSection />
        </div>
        <div className="project-card">
          <h3 style={{ textAlign: 'center',marginTop: '100px',fontSize:"30px"  }}>Spotify Dashboard</h3>
          <p style={{ textAlign: 'center' }}>Work In Progress</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
