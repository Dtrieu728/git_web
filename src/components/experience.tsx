import React from 'react';
import '../components/experience.css'; // Import CSS file for styling

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
