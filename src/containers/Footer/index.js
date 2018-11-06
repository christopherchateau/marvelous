import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { showFavorites } from "../../actions";
import PropTypes from "prop-types";
import "./Footer.css";

export class Footer extends Component {
  render() {
    let text;
    this.props.path === "/favorites"
      ? (text = "Characters")
      : (text = "Favorites");

    return (
      <div className="Footer">
        <NavLink
          to={this.props.showFavorites ? "/characters" : "/favorites"}
          onClick={this.props.dispatchShowFavorites}
          className="fav-btn"
        >
          <h3 className="my-favs">{text}</h3>
        </NavLink>
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
};
