import React from "react";
import VideoSection from "../Video/videoSection";
const careerQuiz = require("../../images/careerquiz1.png");
const Spotify1 = require("../../images/SpotifyPro1.png");
const Spotify2 = require("../../images/Spotifypro2.png");

const ProjectsSection = () => {
  return (
    <div
      id="Projects"
      className="additionalContainer fade-in"
      style={{ marginTop: "200px", padding: "20px" }}
    >
      <h3
        className="section-title"
        style={{ fontSize: "35px", textAlign: "center" }}
      >
        <b> Projects</b>
      </h3>
      <div className="project-container">
        <div className="project-card">
          <h3 className="project-title">
            Developed an Interactive Career Quiz
          </h3>
          <p className="project-description">
            Designed and implemented an interactive quiz leveraging OpenAI's
            advanced language models to assist users in identifying optimal
            career paths. The application evaluates user responses through a
            series of targeted questions and provides personalized career
            recommendations based on the user's skills, interests, and
            preferences. This project demonstrates proficiency in integrating
            AI-driven solutions with user-centric design to deliver valuable
            career insights.
          </p>
          <div className="image-container">
            <img src={careerQuiz} alt="career" className="project-image" />
          </div>
          <div className="video-container">
            <h2>Career Quiz Link</h2>
            <a
              href="https://vikiniki123.github.io/starter_helpi/"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              Project Demostration
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-title">
            Sentiment Analysis RNN
          </h3>
          <p className="project-description">
              Developed a sentiment analysis model using a Recurrent Neural Network (RNN) with LSTM units to classify user-generated hotel reviews as positive or negative. 
              Preprocessed over 500,000 reviews by normalizing text, removing noise, and eliminating stopwords.
              Trained and evaluated the model on a labeled dataset to achieve robust accuracy in detecting sentiment trends.
              This project showcases skills in deep learning, natural language processing (NLP), and end-to-end machine learning workflows.
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-title">
            Gender Inclusive Language Initiative
          </h3>
          <p className="project-description">
            Contributed to a hackathon project focused on developing a tool for
            identifying and promoting gender-inclusive language. The project
            aims to assist organizations in revising their written content to
            ensure inclusivity and sensitivity towards gender diversity. The
            solution employs advanced text analysis techniques to detect and
            suggest alternatives for gender-biased language, enhancing
            communication practices and fostering a more inclusive environment.
          </p>
          <VideoSection />
        </div>
        <div className="project-card">
          <h3 className="project-title">Spotify Dashboard</h3>
          <p className="project-description">
            Currently developing an advanced dashboard application for Spotify
            that provides users with a comprehensive overview of their listening
            experience. The dashboard features real-time displays of user
            profile information, currently playing tracks, and personalized
            playlists. This project involves integrating with the Spotify API to
            fetch and visualize data, with ongoing enhancements aimed at
            improving the user interface and overall aesthetic to deliver an
            engaging and intuitive user experience.
          </p>
          <div className="image-container">
            <img
              src={Spotify1}
              alt="Spotify Project profile"
              className="project-image"
            />
          </div>
          <div className="image-container">
            <img
              src={Spotify2}
              alt="Spotify Project playlist"
              className="project-image"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectsSection;
