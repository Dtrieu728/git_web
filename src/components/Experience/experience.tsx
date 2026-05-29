import React, { useRef, useEffect, useState } from 'react';
import "../Experience/experience.css";

interface ExperienceProps {
  title: string;
  organization: string;
  date: string;
  responsibilities: string[];
}

const Experience: React.FC<ExperienceProps> = ({ title, organization, date, responsibilities }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div ref={ref} className={`exp-item${visible ? ' exp-visible' : ''}`}>
      <div className="exp-dot" />
      <div className="exp-body">
        <span className="exp-date">{date}</span>
        <h3 className="exp-title">{title}</h3>
        <p className="exp-org">{organization}</p>
        <ul className="exp-list">
          {responsibilities.map((item, i) => (
            <li key={i} style={{ animationDelay: `${0.1 + i * 0.07}s` }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;