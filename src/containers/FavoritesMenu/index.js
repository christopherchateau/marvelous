import React, { Component } from "react";
import { connect } from "react-redux";
import "./FavoritesMenu.css";

class FavoritesMenu extends Component {
  render() {
    const { favoriteCharacters } = this.props;
    console.log(favoriteCharacters);
    if (favoriteCharacters) {
      const favorites = favoriteCharacters.map(fav => {
        return (
          
            <li className="fav-list-item">{fav.name}<img className="fav-list-pic" src={fav.pic} /></li>
            
      
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
          <nav className="fav-menu">NO FAVORITES</nav>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  favoriteCharacters: state.characters.filter(ch => ch.favorited)
});

export default connect(mapStateToProps)(FavoritesMenu);
