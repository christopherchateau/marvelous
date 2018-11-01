import React from "react";
import { connect } from "react-redux";
import { storeCharacter } from "../../actions";
import marvelUniverse from "../../images/marvel-universe.png";
import "./Main.css";

const Main = () => {
  return (
    <main className="Main">
      <img className="marvel-uni-img" src={marvelUniverse} />
    </main>
  );
};

export default Main;
