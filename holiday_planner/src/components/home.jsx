import "../css/home.css";
import { useState } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import ToFind from "./toFind";
import AmazingOffer from "./amazingOffer";
import About1 from "./about1";
import AmezingTours from "./amezingTours";

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const HomeSlides = [
    {
      backgroundImage: image1,
      h2: "Get Ready To Travel",
      h1: "The World",
      p: "A journey of a 1000 miles starts with single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.",
    },
    {
      backgroundImage: image2,
      h2: "Enjoy The Travel With ",
      h1: "Holiday Planners",
      p: "A journey of a 1000 miles starts with single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.",
    },
    {
      backgroundImage: image3,
      h2: "Life is Short and",
      h1: "The World is Wide",
      p: "A journey of a 1000 miles starts with single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.",
    },
  ];

  const currentBackground = HomeSlides[currentSlideIndex];

  const handleNextSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % HomeSlides.length;
    setCurrentSlideIndex(nextIndex);
  };

  const handlePreviousSlide = () => {
    const prevIndex =
      (currentSlideIndex - 1 + HomeSlides.length) % HomeSlides.length;
    setCurrentSlideIndex(prevIndex);
  };

  return (
    <div className="home_content">
      <div
        className="home_slides"
        style={{ backgroundImage: `url(${currentBackground.backgroundImage})` }}
      >
        <div className="background_word">
          <button
            className="slider-button"
            id="btn1"
            onClick={handlePreviousSlide}
          >
            Previous
          </button>
          <div className="words">
            <h2 id="slides_h2">{currentBackground.h2}</h2>
            <h1 id="slides_h1">{currentBackground.h1}</h1>
            <p id="slides_desc">{currentBackground.p}</p>
          </div>
          <button id="btn2" className="slider-button" onClick={handleNextSlide}>
            Next
          </button>
        </div>
      </div>
      <div className="to_find">
        <ToFind />
      </div>
      <div className="about">
        <About1 />
      </div>
      <div className="amazingOffer">
        <AmazingOffer />
      </div>
      <div className="amezingTours">
        <AmezingTours/>
      </div>
    </div>
  );
};

export default Home;
