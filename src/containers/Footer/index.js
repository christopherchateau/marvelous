import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { showFavorites } from "../../actions";
import PropTypes from "prop-types";
import "./Footer.css";

export class Footer extends Component {
  render() {
    const { dispatchShowFavorites, showFavorites, path } = this.props;
    let text;
    path === "/favorites" ? (text = "Characters") : (text = "Favorites");

    return (
      <div className="Footer">
        <NavLink
          to={showFavorites ? "/characters" : "/favorites"}
          onClick={dispatchShowFavorites}
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
  showFavorites: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};
