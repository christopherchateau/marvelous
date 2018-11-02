import React from "react";
import { connect } from "react-redux";
import { storeCharacter } from "../../actions";
import marvelUniverse from "../../images/marvel-universe.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main className="Main">
      <div className="img-wrapper">
        <img className="marvel-uni-img" src={marvelUniverse} />
      </div>
    </main>
  );
};

export default LandingPage;
