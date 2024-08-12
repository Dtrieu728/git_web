import React from "react";
import "../Icons/socialIcons.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/Dtrieu728">
        <FaGithub size={40} />
      </a>
      <a href="https://www.linkedin.com/in/dustine-trieu">
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};

export default SocialIcons;
