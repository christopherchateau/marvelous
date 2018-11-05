import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import marvelUniverse from "../../images/marvel-universe.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <NavLink className="Main" to='/characters'>
    <Header />
      <div className="img-wrapper">
      <h3 className="click-anywhere">Click to begin!</h3>
      </div>
    </NavLink>
  );
};

export default LandingPage;
