import AboutSlideshow from "./AboutSlideshow";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <AboutSlideshow />
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m an adventurous undergraduate pursuing dual degrees. B.Tech in Computer Science at MU and BS in Data Science at IIT Madras. I am deeply passionate about programming, with strong proficiency in C++, Python, SQL, DSA, Java, HTML, CSS, Git and building dynamic web applications. And my superpower? Translating technical complexity into real-world impact. <br/><br/>
          Beyond the screen, I'm a proven leader with over 5 years of experience in public speaking, community building, and event hosting. I pride myself on being versatile whether it's diving into diverse hobbies, leading a team, or cracking complex algorithms, I can pick up and excel at anything I set my mind to. I’m always eager to learn, level up, and create something amazing.
        </p>
      </div>
    </div>
  );
};

export default About;
