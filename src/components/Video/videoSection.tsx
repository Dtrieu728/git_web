import React from 'react';
import './videoSection.css'; // Assuming you have a CSS file for styling

const VideoSection = () => {
  return (
    <div className="video-container">
      <h2>Hackathon Link</h2>
      <a 
        href="https://devpost.com/software/gender-inclusive-language-example" 
        target="_blank" 
        rel="noopener noreferrer"
        className="video-link"
      >
       Project Demostration
      </a>
    </div>
  );
}

export default VideoSection;
