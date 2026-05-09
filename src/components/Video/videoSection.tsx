import React from 'react';
import './videoSection.css';

const VideoSection: React.FC = () => {
  return (
    <div className="video-container">
      <h2>Hackathon Link</h2>
      <a
        href="https://devpost.com/software/gender-inclusive-language-example"
        target="_blank"
        rel="noopener noreferrer"
        className="video-link"
      >
        Project Demonstration
      </a>
    </div>
  );
};

export default VideoSection;
