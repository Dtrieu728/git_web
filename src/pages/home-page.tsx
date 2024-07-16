import React from "react";
import "../pages/home_page.css";
import SocialIcons from "../components/SocialIcons";
const headShot = require("../images/Funnydusty.jpg");
const cat = require("../images/GRAPLb4X0AAeVAA.jpg");
function HomePage() {
    return (
        <div className="homePage" style={{backgroundColor:"white"}}>
            <div className="card">
                <img src={headShot} alt="Avatar" style={{ width: "100%" }} />
                <div className="container">
                    <h4><b>Dustine Trieu</b></h4>
                    <p>B.S Computer Science</p>
                    <p>B.A Asian Studies</p>
                    <SocialIcons></SocialIcons>
                    <p><button>Contact</button></p>
                </div>
            </div>
            <div className="additionalContainerWrapper">
                <div className="additionalContainer">
                    <div className="bio" style ={{fontSize:"20px"}}>
                        <h4><b>About</b></h4>
                        <p>Hello my name is Dustine Trieu and I am a Junior at the University of Delaware studying Computer Science. I have experience in software engineering and I am also learning about AI and machine learning. This website contains my experience and projects that I have worked on. </p>
                        <p>More stuff will be added to this website</p>
                    </div>
                </div>
                <div className="additionalContainer">
                    <div className="bio" style={{fontSize:"20px"}}>
                        <h4><b>Projects</b></h4>
                        <ul>
                            <li>Career Quiz using OpenAI</li>
                            <p> Testing testing</p>
                            <li>Gender Inclusive Language project from Hackathon</li>                        </ul>
                    </div>
                </div>
                <div className="additionalContainer">
                    <div className="bio" style={{fontSize:"20px"}}>
                        <h4><b>Experience</b></h4>
                        <ul>
                            <li>Intro to Computer Science 1 TA (August 23 - December 23)</li>
                            <li>Intro to System Programming TA (December 23 - June 24)</li>   
                            <li>Computing Promotion Undergraduate Squad</li>                     
                        </ul>
                    </div>
                </div>
                <img src={cat} alt="kitty" style={{width:"80%", margin:"20px",alignItems:"center"}}></img>
            </div>
        </div>
    );
}

export default HomePage;
