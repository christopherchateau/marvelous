import React from "react";
import Header from '../Header'
import { NavLink } from "react-router-dom";
import marvelUniverse from "../../images/marvel-universe.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <NavLink className="Main" to='/characters'>
    <Header />
      <div className="img-wrapper">
      <h3 className="click-anywhere">Click anywhere to begin!</h3>
        <img
          className="marvel-uni-img"
          alt="Marvel Universe"
          src={marvelUniverse}
        />
      </div>
    </NavLink>
  );
};

export default LandingPage;
