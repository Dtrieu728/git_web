import React from "react";
import VideoSection from "../Video/videoSection";
import "./project.css";

const careerQuiz = require("../../images/careerquiz1.png");
const Spotify1 = require("../../images/SpotifyPro1.png");
const Backtest = require("../../images/backtestingAAPL.png")
const MriRecon = require("../../images/MRIREcon.png");

const PROJECTS = [
  {
    id: 1,
    title: "Converted and Improve MATLAB Non-Cartesian MRI Reconstruction Pipeline",
    description:
      "Converted a non-Cartesian MRI image reconstruction pipeline from MATLAB to Python, enabling more flexible experimentation and GPU acceleration. The system reconstructs medical images from irregularly sampled frequency-domain data using NUFFT-based methods, significantly improving runtime performance while preserving image quality.",
    images: [MriRecon],
    links: [
      {
        label: "Github Link",
        url: "https://github.com/EdmarPelayo/CISC498-Johnson-Project",
      },
    ],
    techStack: ["Python", "MATLAB", "NumPy", "GPU Computing", "Signal Processing"],
  },
   {
    id: 2,
    title: "Backtesting Engine",
    description:
      "Developed a quantitative backtesting engine in Python for simulating and evaluating algorithmic trading strategies on historical market data. Implemented portfolio accounting, leverage and position management, slippage and transaction cost modeling, walk-forward optimization, and regime-based risk scaling to analyze strategy robustness across varying market conditions.",
    images: [Backtest],
    links: [
      {
        label: "Github Link",
        url: "https://github.com/Dtrieu728/Backtesting_Engine",
      },
    ],
    techStack: ["Python", "NumPy", "Pandas"],
  },
   {
    id: 3,
    title: "Spotify Dashboard",
    description:
      "Currently developing an advanced dashboard application for Spotify that provides users with a comprehensive overview of their listening experience. The dashboard features real-time displays of user profile information, currently playing tracks, and personalized playlists. This project involves integrating with the Spotify API to fetch and visualize data, with ongoing enhancements aimed at improving the user interface and overall aesthetic to deliver an engaging and intuitive user experience.",
    images: [Spotify1],
    links: [
      {
        label: "Live Demo",
        url: "https://spotify-data-ex.vercel.app/",
      },
    ],
    techStack: ["React", "Spotify API", "OAuth", "TypeScript", "Vercel"],
  },
  {
    id: 4,
    title: "Developed an Interactive Career Quiz",
    description:
      "Designed and implemented an interactive quiz leveraging OpenAI's advanced language models to assist users in identifying optimal career paths. The application evaluates user responses through a series of targeted questions and provides personalized career recommendations based on the user's skills, interests, and preferences. This project demonstrates proficiency in integrating AI-driven solutions with user-centric design to deliver valuable career insights.",
    images: [careerQuiz],
    links: [
      {
        label: "Project Demonstration",
        url: "https://vikiniki123.github.io/starter_helpi/",
      },
    ],
    techStack: ["React", "OpenAI API", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    id: 5,
    title: "Sentiment Analysis RNN",
    description:
      "Developed a sentiment analysis model using a Recurrent Neural Network (RNN) with LSTM units to classify user-generated hotel reviews as positive or negative. Preprocessed over 500,000 reviews by normalizing text, removing noise, and eliminating stopwords. Trained and evaluated the model on a labeled dataset to achieve robust accuracy in detecting sentiment trends. This project showcases skills in deep learning, natural language processing (NLP), and end-to-end machine learning workflows.",
    images: [],
    links: [
      {
        label: "Github Link",
        url: "https://github.com/Dtrieu728/Sentiment_Analysis_Proj",
      },
    ],
    techStack: ["Python", "TensorFlow", "LSTM", "NLP", "Pandas"],
  },
  {
    id: 6,
    title: "Gender Inclusive Language Initiative",
    description:
      "Contributed to a hackathon project focused on developing a tool for identifying and promoting gender-inclusive language. The project aims to assist organizations in revising their written content to ensure inclusivity and sensitivity towards gender diversity. The solution employs advanced text analysis techniques to detect and suggest alternatives for gender-biased language, enhancing communication practices and fostering a more inclusive environment.",
    images: [],
    links: [],
    hasVideo: true,
    techStack: ["Python", "NLP", "Text Analysis", "Machine Learning"],
  },
];

const ProjectCard: React.FC<{
  title: string;
  description: string;
  images: string[];
  links: Array<{ label: string; url: string }>;
  techStack: string[];
  hasVideo?: boolean;
}> = ({ title, description, images, links, techStack, hasVideo }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>

    {/* Tech Stack */}
    {techStack.length > 0 && (
      <div className="tech-stack">
        <h4 className="tech-stack-label">Tech Stack:</h4>
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}

    {images.length > 0 && (
      <div className="images-section">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={title} className="project-image" />
          </div>
        ))}
      </div>
    )}

    {hasVideo && <VideoSection />}

    {links.length > 0 && (
      <div className="links-section">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            links={project.links}
            techStack={project.techStack}
            hasVideo={project.hasVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
