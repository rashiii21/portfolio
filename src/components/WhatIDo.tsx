import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (slider) {
        gsap.to(slider, {
          x: () => -(slider.scrollWidth - slider.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + slider.scrollWidth,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="whatIDO" ref={containerRef}>
      <div className="what-box">
        <h2 className="title">
          MY JOURNEY'S
          <div>
            <span className="do-h2">HIGHLIGHTS</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-inner">
          <div className="what-slider-container" ref={sliderRef}>
            
            {/* Slide 1 */}
            <div className="what-slide">
              <div className="what-border-wrap">
                <div className="what-corner"></div>
                <div className="what-content-in">
                  <h3>IIT Madras Qualifier</h3>
                  <h4>Academic Excellence</h4>
                  <p>
                    Achieved a phenomenal <strong>Score of 97%</strong> and proud to be a <strong>90% Scholarship Holder</strong> at one of India's most prestigious institutes.
                  </p>
                  <h5>Keywords</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">Data Science</div>
                    <div className="what-tags">IIT Madras</div>
                    <div className="what-tags">Top 3%</div>
                    <div className="what-tags">Scholarship</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="what-slide">
              <div className="what-border-wrap">
                <div className="what-corner"></div>
                <div className="what-content-in">
                  <h3>International English Olympiad (IEO)</h3>
                  <h4>Organised by SOF</h4>
                  <p>
                    Secured a <strong>Distinction with a Gold Medal</strong> among 10,000+ students from my batch. Followed up by becoming <strong>National Level Certified with AIR 195</strong>.
                  </p>
                  <h5>Keywords</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">English Olympiad</div>
                    <div className="what-tags">Gold Medalist</div>
                    <div className="what-tags">AIR 195</div>
                    <div className="what-tags">SOF</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="what-slide">
              <div className="what-border-wrap">
                <div className="what-corner"></div>
                <div className="what-content-in">
                  <h3>Leadership & Extracurriculars</h3>
                  <h4>Class Monitor (Grade 5 to 10) & School Captain</h4>
                  <p>
                    Awarded the <strong>Star Student Award</strong> for multiple years and named <strong>Champion of the Year – English</strong>. Actively participated in 100+ events and earned 20+ awards.
                  </p>
                  <h5>Keywords</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">Leadership</div>
                    <div className="what-tags">Public Speaking</div>
                    <div className="what-tags">School Captain</div>
                    <div className="what-tags">100+ Events</div>
                    <div className="what-tags">20+ Awards</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
