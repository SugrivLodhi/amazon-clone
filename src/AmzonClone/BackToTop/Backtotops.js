import React, { useState, useEffect } from "react";
import "./BacktoTops.css";
const Backtotops = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.addEventListener("scroll", toggleVisibility);
    };
  });

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="back-top-container" onClick={scrollToTop}>
          <span> Back to top</span>
        </div>
      )}
    </div>
  );
};

export default Backtotops;
