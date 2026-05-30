import React, { useRef, useEffect, useState } from "react";
import VideoSection from "../Video/videoSection";
import "./project.css";

const careerQuiz = require("../../images/careerquiz1.png");
const Spotify1   = require("../../images/SpotifyPro1.png");
const Backtest   = require("../../images/backtestingAAPL.png");
const MriRecon   = require("../../images/MRIREcon.png");

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  links: Array<{ label: string; url: string }>;
  techStack: string[];
  hasVideo?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Non-Cartesian MRI Reconstruction Pipeline",
    description:
      "Converted a non-Cartesian MRI image reconstruction pipeline from MATLAB to Python, enabling GPU acceleration via NUFFT-based methods. Significantly improved runtime performance while preserving image quality across irregular frequency-domain data.",
    images: [MriRecon],
    links: [{ label: "GitHub", url: "https://github.com/EdmarPelayo/CISC498-Johnson-Project" }],
    techStack: ["Python", "MATLAB", "NumPy", "GPU Computing", "Signal Processing"],
  },
  {
    id: 2,
    title: "Quantitative Backtesting Engine",
    description:
      "Python engine for simulating algorithmic trading strategies on historical market data. Implements portfolio accounting, leverage management, slippage modeling, walk-forward optimization, and regime-based risk scaling.",
    images: [Backtest],
    links: [{ label: "GitHub", url: "https://github.com/Dtrieu728/Backtesting_Engine" }],
    techStack: ["Python", "NumPy", "Pandas"],
  },
  {
    id: 3,
    title: "Spotify Analytics Dashboard",
    description:
      "Advanced dashboard integrating the Spotify API with OAuth to display real-time profile data, currently playing tracks, and personalized playlists. Focused on clean data visualization and an intuitive listening experience.",
    images: [Spotify1],
    links: [{ label: "Live Demo", url: "https://spotify-data-ex.vercel.app/" }],
    techStack: ["React", "Spotify API", "OAuth", "TypeScript", "Vercel"],
  },
  {
    id: 4,
    title: "Interactive Career Quiz",
    description:
      "OpenAI-powered quiz that evaluates user responses across targeted questions to deliver personalized career path recommendations based on skills, interests, and preferences.",
    images: [careerQuiz],
    links: [{ label: "Demo", url: "https://vikiniki123.github.io/starter_helpi/" }],
    techStack: ["React", "OpenAI API", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    id: 5,
    title: "Sentiment Analysis RNN",
    description:
      "LSTM-based RNN trained on 500k+ hotel reviews to classify sentiment as positive or negative. Full NLP pipeline including text normalization, stopword removal, and end-to-end model evaluation.",
    images: [],
    links: [{ label: "GitHub", url: "https://github.com/Dtrieu728/Sentiment_Analysis_Proj" }],
    techStack: ["Python", "TensorFlow", "LSTM", "NLP", "Pandas"],
  },
  {
    id: 6,
    title: "Linux Self-Hosted Media Infrastructure",
    description:
      "Deployed a Docker Compose container orchestration system for 24/7 media streaming and LAN file distribution, with persistent storage and automated restarts mirroring production deployment practices",
    images: [],
    links: [],
    hasVideo: false,
    techStack: ["Linux", "Docker", "JellyFin", "Navidrome", "File Sharing"],
  },
   {
    id: 7,
    title: "Gender-Inclusive Language Tool",
    description:
      "Hackathon project employing NLP to detect gender-biased language in organizational content and suggest inclusive alternatives, fostering more equitable communication practices.",
    images: [],
    links: [{label: "DevPost", url: "https://devpost.com/software/gender-inclusive-language-example"}],
    hasVideo: false,
    techStack: ["C++", "WebDev", "Text Analysis"],
  },
];

const ProjectCard: React.FC<Project> = ({
  title, description, images, links, techStack, hasVideo,
}) => {
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

  return (
    <div ref={ref} className={`project-card${visible ? " project-card--visible" : ""}`}>
      {/* Left: text */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="tech-tags">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="links-section">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {link.label}
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Right: media */}
      {(images.length > 0 || hasVideo) && (
        <div className="project-media">
          {images.map((img, i) => (
            <img key={i} src={img} alt={title} className="project-image" />
          ))}
          {hasVideo && <VideoSection />}
        </div>
      )}
    </div>
  );
};

const ProjectsSection: React.FC = () => (
  <div className="projects-container">
    <div className="projects-header">
    </div>
    <div className="project-list">
      {PROJECTS.map((p, i) => (
        <div key={p.id} style={{ transitionDelay: `${i * 0.05}s` }}>
          <ProjectCard {...p} />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;