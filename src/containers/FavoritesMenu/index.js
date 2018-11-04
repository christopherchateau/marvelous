import React, { Component } from "react";
import { connect } from "react-redux";
import { showFavorites, updateStorageDetails } from "../../actions";
import PropTypes from "prop-types";
import captAmerica from "../../images/capt-america.gif";
import "./FavoritesMenu.css";

export class FavoritesMenu extends Component {
  handleFavoriteClick = event => {
    const {
      dispatchStorageDetailsUpdate,
      dispatchShowFavorites,
      storedCharacters
    } = this.props;

    let currentIndex = storedCharacters.reduce((currentIndex, char, index) => {
      if (char.id === +event.target.id) {
        currentIndex = index;
      }
      return currentIndex;
    }, 0);
    
    dispatchStorageDetailsUpdate(currentIndex, storedCharacters.length);
    dispatchShowFavorites();
  };

  render() {
    const { favoriteCharacters } = this.props;

    if (favoriteCharacters.length) {
      const favorites = favoriteCharacters.map(fav => {
        return (
          <li
            className="fav-list-item"
            key={fav.id}
            id={fav.id}
            onClick={this.handleFavoriteClick}
          >
            {fav.name}
            <img
              className="fav-list-pic"
              alt="Character thubmails"
              src={fav.pic}
            />
          </li>
        );
      });
      return (
        <div className="FavoritesMenu">
          <nav className="fav-menu">
            <ul className="favs-list">{favorites}</ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="FavoritesMenu">
          <section className="fav-menu empty">
            <img
              className="capt-america"
              alt="Captain America"
              src={captAmerica}
            />
            <h3>No favorites selected</h3>
          </section>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  storedCharacters: state.characters,
  favoriteCharacters: state.characters.filter(ch => ch.favorited)
});

export const mapDispatchToProps = dispatch => ({
  dispatchShowFavorites: () => dispatch(showFavorites()),
  dispatchStorageDetailsUpdate: (index, count) =>
    dispatch(updateStorageDetails(index, count))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesMenu);

FavoritesMenu.propTypes = {
  storedCharacters: PropTypes.array.isRequired,
  favoriteCharacters: PropTypes.array.isRequired,
  dispatchShowFavorites: PropTypes.func.isRequired,
  dispatchStorageDetailsUpdate: PropTypes.func.isRequired
};
