import React from 'react';
import "../Experience/experience.css";

interface ExperienceProps {
  title: string;
  organization: string;
  date: string;
  responsibilities: string[];
}

const Experience: React.FC<ExperienceProps> = ({ title, organization, date, responsibilities }) => {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <h4>{organization}</h4>
      <p>{date}</p>
      <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
