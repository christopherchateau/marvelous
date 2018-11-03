import React from "react";
import marvelUniverse from "../../images/marvel-universe.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main className="Main">
      <div className="img-wrapper">
        <img
          className="marvel-uni-img"
          alt="Marvel Universe"
          src={marvelUniverse}
        />
      </div>
    </main>
  );
};

export default LandingPage;
