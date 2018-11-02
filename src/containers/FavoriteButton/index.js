import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../../actions";
import "./FavoriteButton.css";

class FavoriteButton extends Component {
  constructor(props) {
    super(props);
  }

  handleFavoriteClick = () => {

  };

  render() {
    return (
      <i
        className={"fa-star" + (this.props.favorited ? " fas favorited" : " far")}
        onClick={this.handleFavoriteClick}
      />
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
