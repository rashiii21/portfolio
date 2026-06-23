import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ExperienceHub.css";

gsap.registerPlugin(ScrollTrigger);

const tabData: Record<string, { title: string; subtitle: string; desc: string; image?: string }[]> = {
  "Certificates & Hackathons": [
    {
      title: "Google Cloud Gen AI Academy APAC",
      subtitle: "2026 Cohort 1",
      desc: "Completed hands-on labs and built a multi-agent AI system integrating real-world tools using Google Cloud."
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Microsoft",
      desc: "Successfully completed the requirements for Azure Fundamentals certification."
    },
    {
      title: "McKinsey Forward Program",
      subtitle: "McKinsey.org",
      desc: "Accepted into the prestigious McKinsey Forward program for core skills learning and professional development."
    },
    {
      title: "Meta PyTorch OpenEnv Hackathon",
      subtitle: "Scaler School of Technology",
      desc: "Built an Inbox Triage OpenEnv, an RL environment to simulate email classification. Passed all validation checks and implemented custom reward functions."
    },
    {
      title: "Microsoft Power BI Data Analyst (PL-300)",
      subtitle: "Microsoft & FICE",
      desc: "Successfully completed a 20-hour course on Microsoft Power BI Data Analyst on the Microsoft Learn platform."
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      subtitle: "Deloitte / Forage",
      desc: "Completed practical tasks in Data analysis and Forensic technology during the job simulation."
    },
    {
      title: "Digital Application Fundamentals (STEM)",
      subtitle: "Nasscom / FutureSkills Prime",
      desc: "Aligned to Competency Standards developed by IT-ITeS Sector Skills Council Nasscom."
    },
    {
      title: "IEEEXtreme 19.0 Programming Competition",
      subtitle: "IEEE",
      desc: "Participated in the global IEEEXtreme 19.0 Programming Competition hosted for over 19,000 participants."
    },
    {
      title: "IIT Madras Qualifier",
      subtitle: "97% Score & 90% Scholarship Holder",
      desc: "Top performer in the prestigious IIT Madras data science qualifier exam."
    },
    {
      title: "International English Olympiad (IEO)",
      subtitle: "Gold Medalist & AIR 195",
      desc: "Distinction with a Gold medal among 10000+ students. National Level Certified by SOF."
    },
    {
      title: "Careerflow.ai Certification",
      subtitle: "Careerflow",
      desc: "Successfully optimized LinkedIn profile to 100% using Careerflow.ai."
    }
  ],
  Ambassadors: [
    {
      title: "Google Ambassador",
      subtitle: "Google",
      desc: "Representing Google on campus, organizing tech events and driving student engagement."
    },
    {
      title: "Campus Ambassador",
      subtitle: "Air India Limited",
      desc: "Representing Air India Limited on campus, driving brand awareness and student engagement initiatives."
    },
    {
      title: "Internshala Student Partner",
      subtitle: "Internshala",
      desc: "Selected for the ISP program to educate college students about the power of internships."
    },
    {
      title: "IEEE Campus Ambassador",
      subtitle: "IEEE DSSYWLC 2025",
      desc: "Served as a Campus Ambassador for IEEE DSSYWLC 2025 at Poornima Institute of Engineering and Technology."
    }
  ],
  "Leadership & Core Teams": [
    {
      title: "Core Team (PR)",
      subtitle: "AWS Society",
      desc: "Managing public relations and driving awareness for AWS Society initiatives."
    },
    {
      title: "Chapter Secretary",
      subtitle: "IEEE ComSoc",
      desc: "Serving as Chapter Secretary for the IEEE Communications Society."
    },
    {
      title: "Outreach Coordinator",
      subtitle: "Sahara Welfare Society (IITM)",
      desc: "Coordinating outreach initiatives and driving engagement for the welfare society at IIT Madras."
    },
    {
      title: "Executive Member",
      subtitle: "Penumbra",
      desc: "Active member of the Oratory & Anchoring Club, honing public speaking and hosting skills."
    },
    {
      title: "Executive Member",
      subtitle: "Karuna Welfare Society",
      desc: "Contributing to social welfare and community-driven initiatives."
    },
    {
      title: "Executive Member (Marketing)",
      subtitle: "Enginium",
      desc: "Responsible for securing sponsorships for the university's official magazine."
    },
    {
      title: "Executive Member",
      subtitle: "Anahata - BlackPearls",
      desc: "Active participant in the contemporary dance-form club."
    },
    {
      title: "Executive Member",
      subtitle: "IEEE - Membership Development",
      desc: "Focusing on community growth and driving IEEE membership development."
    },
    {
      title: "School Captain",
      subtitle: "1 Year Tenure",
      desc: "Led the student body and managed public relations and community initiatives."
    },
    {
      title: "Class Monitor",
      subtitle: "Grade 5 to Grade 10",
      desc: "Constantly leveled up mastering the skills of leadership and teamwork over 5 years."
    },
    {
      title: "Super Star Student of the Year",
      subtitle: "5 Consecutive Years",
      desc: "Awarded the prestigious Super Star Student of the Year award for 5 consecutive years in school."
    },
    {
      title: "Champion of the Year",
      subtitle: "English",
      desc: "Recognized as the Champion of the Year in English for outstanding language and communication skills."
    }
  ],
  "News Corner": [
    {
      title: "First from District Selected in IIT Madras",
      subtitle: "Dainik Bhaskar",
      desc: "Featured in the newspaper for being the first from Saran district to qualify for the prestigious IIT Madras BS Data Science program with an outstanding 97% score.",
      image: "/news-iit-madras.jpg"
    },
    {
      title: "Interaction with DM Subrat Kumar Sen",
      subtitle: "Press Feature",
      desc: "Featured in the local press during an interactive session where I raised critical questions about the education system to the District Magistrate.",
      image: "/news-dm-interview.jpg"
    },
    {
      title: "3rd Place in Inter-School Speech Competition",
      subtitle: "Press Feature",
      desc: "Recognized in the news for securing the 3rd position in a prestigious inter-school speech and debate competition.",
      image: "/news-gandhi-debate.jpg"
    },
    {
      title: "1st Place in Rotary Club Spelling Competition",
      subtitle: "Press Feature",
      desc: "Featured for leading the Imperial Public School team to secure the 1st position in the Inter-School English Spelling Competition organized by the Rotary Club.",
      image: "/news-spelling-competition.jpg"
    }
  ]
};

const ExperienceHub = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (sectionRef.current && triggerRef.current) {
        // We calculate the exact width we need to slide by getting the total scrollable width
        // minus the width of the viewport so we stop exactly at the end.
        
        const getScrollAmount = () => {
          let containerWidth = sectionRef.current!.scrollWidth;
          return -(containerWidth - window.innerWidth);
        };

        const tween = gsap.to(sectionRef.current, {
          x: getScrollAmount,
          ease: "none"
        });

        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current!.scrollWidth - window.innerWidth}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="hub-trigger" ref={triggerRef}>
      <div className="hub-section-wrapper">
        <div className="hub-horizontal-container" ref={sectionRef}>
          {Object.entries(tabData).map(([category, items], index) => (
            <div className="hub-category-group" key={index}>
              <div className="hub-category-title">
                <h2>{category}</h2>
                <div className="hub-category-line"></div>
              </div>
              <div className="hub-cards-row">
                {items.map((item, idx) => (
                  <div className="hub-card" key={idx}>
                    <div className="hub-card-glow"></div>
                    {item.image && (
                      <div className="hub-card-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                    )}
                    <div className="hub-card-content">
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceHub;
