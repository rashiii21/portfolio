import "./styles/Work.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workData = [
  {
    title: "Python Sudoku Solver (GUI)",
    category: "Python | Algorithms | Backtracking",
    tools: "Developed a Python program using Tkinter GUI to solve Sudoku puzzles of varying difficulty. Implemented backtracking algorithm, recursive problem-solving, and constraint satisfaction to automatically validate and solve puzzles.",
    image: "/project-sudoku.jpg"
  },
  {
    title: "Quadcopter Drone Assembly & Testing",
    category: "UAV | Aerodynamics | MNIT Jaipur",
    tools: "Assembled and tested an unmanned aerial vehicle (UAV). Explored principles of lift, thrust balance, and torque cancellation. Awarded Top Scorer at the Drone Workshop organised by MNIT Jaipur.",
    image: "/project-drone.jpg"
  },
  {
    title: "SOLIDWORKS CAD - Wind Turbine",
    category: "SolidWorks | CAD | Mechanical Design",
    tools: "Designed and assembled a horizontal-axis wind turbine. Focused on part modeling, mates, motion study, power transmission, load transfer, and rotational motion analysis.",
    image: "/project-wind-turbine.jpg"
  },
  {
    title: "Visitor Counter",
    category: "Electronics | Hardware",
    tools: "Built a hardware-based electronic Visitor Counter system.",
    image: "/project-visitor-counter.jpg"
  },
  {
    title: "Box Transport Mechanism",
    category: "Mechanical | Project Based Learning",
    tools: "Designed and developed a mechanical box transport mechanism to explore power transmission and kinetic principles.",
    image: "/project-box-transport.jpg"
  },
  {
    title: "Mobile Signal Jammer",
    category: "Electrical | Electronics",
    tools: "Built a hardware-based electrical project simulating a mobile signal jamming device.",
    image: "/project-signal-jammer.jpg"
  },
  {
    title: "Movie Ticket Booking Simulation",
    category: "DSA | C++ / Java",
    tools: "Developed a menu-driven movie ticket booking simulation using Data Structures and Algorithms. Implemented 2D matrices for seat management, searching, updating techniques, and optimized control structures.",
    image: "/project-ticket-booking.jpg"
  },
  {
    title: "Inbox Triage OpenEnv",
    category: "FastAPI | Machine Learning | HF Spaces",
    tools: "Built a FastAPI-based reinforcement learning environment for email classification and decision-making. Successfully deployed on Hugging Face Spaces.",
    image: "/project-inbox-triage.jpg"
  },
  {
    title: "Pharma Care Management System",
    category: "DBMS | Java | SQL",
    tools: "Developed a comprehensive Java and DBMS-based system to manage patient details, prescriptions, and medication schedules. Features automated medicine reminders and utilizes structured SQL relationships.",
    image: "/project-pharma-care.jpg"
  }
];

const Work = () => {
  useGSAP(() => {
    // Create an infinite horizontal scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(".work-flex", {
      xPercent: -50, // Move exactly half of the duplicated content
      ease: "none",
      duration: 120, // Adjust speed here (higher is slower)
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Projects <span>Made</span>
        </h2>
        {/* We duplicate the workData array so the marquee loops seamlessly */}
        <div className="work-flex-wrapper" style={{ overflow: "hidden", width: "100%" }}>
          <div className="work-flex" style={{ display: "flex", width: "max-content" }}>
            {[...workData, ...workData].map((item, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{(index % workData.length) + 1}</h3>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.category}</p>
                    </div>
                  </div>
                  <h4>Project Details</h4>
                  <p>{item.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
