import React, { Component } from "react";
import { connect } from "react-redux";
import { showFavorites } from "../../actions";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <button onClick={this.props.dispatchshowFavorites} className="fav-btn">
          <h3 className="my-favs">My Favorites</h3>
          <i className="fa-star far fav-btn-star" />
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  dispatchshowFavorites: () => dispatch(showFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
