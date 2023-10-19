import React from "react";
import {Link} from "react-router-dom"
import "./Error.css"

const Error = () => {
  return (
    <>
      <div className="err-container">
        <div className="err-div">
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            Sorry, this page are looking for does not exist.
          </p>
          <Link className="btn" to={"ecartweb/"}>Go Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
