import "./styles/Internships.css";

const internshipData = [
  {
    role: "Machine Learning Intern",
    company: "Internship Studio",
    year: "Apr 2026 - Present",
    desc: "Developing and applying machine learning models. Gaining hands-on experience with real-world ML workflows, data preprocessing, and model evaluation.",
  },
  {
    role: "Python Intern",
    company: "CodSoft",
    year: "Apr 2026 - Present",
    desc: "Building Python-based projects and applications to strengthen programming and problem-solving skills.",
  },
  {
    role: "Google Ambassador",
    company: "Google",
    year: "Apr 2026 - Present",
    desc: "Representing Google on campus by promoting products, tools, and programs. Organizing tech events and driving student engagement.",
  }
];

const Internships = () => {
  return (
    <div className="internships-section section-container">
      <div className="internships-container">
        <h2 className="internships-title">
          My <span>Internships</span>
        </h2>
        
        <div className="internships-grid">
          {internshipData.map((item, index) => (
            <div className="internship-card" key={index}>
              <div className="internship-card-header">
                <div className="internship-card-title">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <div className="internship-card-year">{item.year}</div>
              </div>
              <p className="internship-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
