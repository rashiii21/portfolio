import { useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setAllTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    let progress = setProgress((value) => setLoading(value));
    progress.loaded().then(() => {
      setAllTimeline();
    });
    
    return () => progress.clear();
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/images/rashi.png" 
          alt="Rashi Shrivastava" 
          className="landing-rashi-img"
          style={{ 
            height: "85%", 
            width: "auto", 
            objectFit: "contain",
            filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))"
          }} 
        />
      </div>
    </div>
  );
};

export default Scene;
