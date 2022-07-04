import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Slider.css";
const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  //If we clik on Previous r next button then Move the Image
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  //If user not click on Prevous or next button then Slidder move automaticaly for Every 5 second
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="section">
      <div className="section-center">
        {images.map((image, imageIndex) => {
          let position = "nextSlide"
          if (imageIndex === index) {
            position = "activeSlide"
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === images.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article className={position} key={imageIndex}>
              <img src={image} alt="banner___image" className="banner-img" />
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowBackIosNewIcon />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          <ArrowForwardIosIcon />
    </p>
      </div>
    </div>
  );
};

export default Slider;
