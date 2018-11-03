import React, { Component } from "react";
import { connect } from "react-redux";
import { showFavorites } from "../../actions";
import "./Footer.css";

class Footer extends Component {
  render() {
    let text;
    this.props.showFavorites ?
      text = "Characters"
      : text = "Favorites"
    return (
      <div className="Footer">
        <button onClick={this.props.dispatchshowFavorites} className="fav-btn">
          <h3 className="my-favs">
            {text}
          </h3>
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  showFavorites: state.showFavorites
});

export const mapDispatchToProps = dispatch => ({
  dispatchshowFavorites: () => dispatch(showFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
