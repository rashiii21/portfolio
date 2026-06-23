import "./styles/Career.css";

const careerData = [
  {
    role: "Frontend Development Intern",
    company: "Decodelabs",
    desc: "Working on real-world frontend projects, learning through mentor-led sessions, and sharpening development skills.",
  },
  {
    role: "Summer Internship 2026",
    company: "VLED Lab, IIT Ropar",
    desc: "Assigned contributor on a live, open-source software repository solving India-centric problems.",
  },
  {
    role: "AI Virtual Internship",
    company: "IBM & FutureSkills Prime",
    desc: "Successfully completed the Artificial Intelligence virtual internship powered by IBM Developer Skills Network.",
  },
  {
    role: "Machine Learning Intern",
    company: "Internship Studio",
    desc: "Developing and applying machine learning models. Gaining hands-on experience with real-world ML workflows, data preprocessing, and model evaluation.",
  },
  {
    role: "Python Intern",
    company: "CodSoft",
    desc: "Building Python-based projects and applications to strengthen programming and problem-solving skills.",
  }
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
