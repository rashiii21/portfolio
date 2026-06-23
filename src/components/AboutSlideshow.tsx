import { useState, useEffect } from "react";
import "./styles/AboutSlideshow.css";

const placeholderImages = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
];

const AboutSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === placeholderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {placeholderImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`slideshow-image ${
            index === currentIndex ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default AboutSlideshow;
