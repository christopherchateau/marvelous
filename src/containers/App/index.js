import React, { Component } from "react";
import { connect } from "react-redux";
import {
  randomCharacter,
  localStoreCharacter,
  generateRandomId
} from "../../utilities/helper";
import { storeCharacter } from "../../actions";
import { Route, withRouter } from "react-router-dom";
import Header from "../../components/Header";
import CharacterProfile from "../CharacterProfile";
import LandingPage from "../../components/LandingPage";
import FavoritesMenu from "../FavoritesMenu";
import Footer from "../Footer";
import PropTypes from "prop-types";
import "./App.css";

export class App extends Component {
  componentDidMount = () => {
    this.initializeStoreWithThreeCharacters();
  };

  initializeStoreWithThreeCharacters = async () => {
    while (this.props.storedCharacters.length < 3) {
      await this.getCharacter("BACK");
    }
  };

  getCharacter = async direction => {
    const randomId = generateRandomId();
    if (this.stopDuplicates(randomId)) return;
    const character = await randomCharacter(randomId);

    !this.validateCharacter(character)
      ? await this.getCharacter(direction)
      : await this.props.dispatchStoreCharacter(character, direction);
  };

  stopDuplicates = id => {
    return this.props.storedCharacters.find(char => char.id === id);
  };

  validateCharacter = character => {
    if (!character.show || character === "failed to load") return false;
    if (character.pic.includes("image_not_available")) {
      character.show = false;
      localStoreCharacter(character);
      return false;
    }
    localStoreCharacter(character);
    return true;
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div className="App">
        {pathname !== "/" && <Header />}
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/characters"
          component={() => (
            <CharacterProfile getCharacter={this.getCharacter} />
          )}
        />
        <Route exact path="/favorites" component={FavoritesMenu} />
        {pathname !== "/" && <Footer path={pathname} />}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  storedCharacters: state.characters,
  showFavorites: state.showFavorites
});

export const mapDispatchToProps = dispatch => ({
  dispatchStoreCharacter: (character, frontOrBack) =>
    dispatch(storeCharacter(character, frontOrBack))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

App.propTypes = {
  dispatchStoreCharacter: PropTypes.func.isRequired,
  storedCharacters: PropTypes.array.isRequired,
  showFavorites: PropTypes.bool.isRequired
};
