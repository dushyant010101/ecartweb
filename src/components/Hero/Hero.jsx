import React from "react";
import "./Hero.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import hand from "./img/hand.png"
import letest from "./img/lestest.png"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arriwal Only</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand} alt="" />
            </div>
            <p>Collaction</p>
            <p>for everyone</p>
          </div>
          <div className="hero-letest-btn">
            <div>Letest Collaction</div>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div className="hero-right">
          <img src={letest} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
