import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import abtimg from "./img/aboutimg.jpg";

const About = () => {
  return (
    <>
      <div className="heading">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni maxime
          est consequuntur laboriosam, dolorum nisi.
        </p>
      </div>
      <div className="abt-container">
        <section className="about">
          <div className="about-image">
            <img src={abtimg} alt="" />
          </div>
          <div className="abt-content">
            <h2>Best Product in Nation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              facere, sapiente a dolor incidunt sit nisi, aut alias id saepe
              ullam? Reprehenderit at qui maiores?
            </p>
            <Link className="readmore">Read more..</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
