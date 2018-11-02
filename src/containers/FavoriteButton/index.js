import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleFavorite } from "../../actions";
import "./FavoriteButton.css";

class FavoriteButton extends Component {
  constructor(props) {
    super(props);
  }

  handleFavoriteClick = () => {
    const { displatchToggleFavorite, id } = this.props;
    displatchToggleFavorite(id);
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

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  displatchToggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
