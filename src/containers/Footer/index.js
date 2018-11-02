import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <button className="fav-btn">
          <i className="fa-star far fav-btn-star" />
          <h3 className="my-favs">My Favorites</h3>
        </button>
      </div>
    );
  }
}

export default Footer;
