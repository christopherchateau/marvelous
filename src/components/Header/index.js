import React from "react";
import spiderMan from "../../images/spider-man.png";
import wolverine from "../../images/wolverine.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <img className="wolverine-pic" alt="wolverine" src={wolverine} />
      <article>
        <h1 className="main-logo">MARVELOUS</h1>
        <h4 className="explore-marvel-text">
          Explore the Marvel Universe one character at at time.
        </h4>
      </article>
      <img className="spider-man-pic" alt="spider-man" src={spiderMan} />
    </header>
  );
};

export default Header;
