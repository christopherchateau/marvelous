import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleFavorite } from "../../actions";
import PropTypes from "prop-types";
import "./FavoriteIcon.css";

export class FavoriteIcon extends Component {
  handleFavoriteClick = () => {
    const { dispatchToggleFavorite, id } = this.props;
    dispatchToggleFavorite(id);
  };
  render() {
    return (
      <i
        className={
          "fa-star" + (this.props.favorited ? " fas favorited" : " far")
        }
        onClick={this.handleFavoriteClick}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchToggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(
  null,
  mapDispatchToProps
)(FavoriteIcon);

FavoriteIcon.propTypes = {
  dispatchToggleFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
