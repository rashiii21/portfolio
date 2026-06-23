import "./styles/Education.css";

const educationData = [
  {
    degree: "BS Data Science & Applications",
    university: "IIT Madras",
    duration: "Jan 2024 - Dec 2028",
    description: "Pursuing a Bachelor of Science degree in Data Science and Applications from the prestigious Indian Institute of Technology, Madras. Rigorous curriculum focusing on mathematics, statistics, and foundational machine learning."
  },
  {
    degree: "B.Tech Computer Science",
    university: "Mody University",
    duration: "Aug 2024 - May 2028",
    description: "Pursuing a Bachelor of Technology degree in Computer Science & Engineering at Mody University of Science and Technology. Hands-on learning in software engineering, algorithms, and system design."
  }
];

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <div className="education-header">
          <h2>
            My <span>Education</span>
          </h2>
        </div>
        
        <div className="education-palettes">
          {educationData.map((edu, index) => (
            <div className="education-palette" key={index}>
              <div className="education-palette-glow"></div>
              <div className="education-palette-content">
                <div className="education-palette-top">
                  <h3>{edu.university}</h3>
                  <span className="education-duration">{edu.duration}</span>
                </div>
                <div className="education-palette-mid">
                  <h4>{edu.degree}</h4>
                </div>
                <div className="education-palette-bottom">
                  <p>{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
