import React, { Component } from "react";
import { connect } from "react-redux";
import { showFavorites } from "../../actions";
import PropTypes from "prop-types";
import "./Footer.css";

export class Footer extends Component {
  render() {
    let text;
    this.props.showFavorites ?
      text = "Characters"
      : text = "Favorites"
    return (
      <div className="Footer">
        <button onClick={this.props.dispatchShowFavorites} className="fav-btn">
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
  dispatchShowFavorites: () => dispatch(showFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

Footer.propTypes = {
  dispatchShowFavorites: PropTypes.func.isRequired,
  showFavorites: PropTypes.bool.isRequired
}