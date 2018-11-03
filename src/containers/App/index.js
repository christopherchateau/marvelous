import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRandomCharacter,
  localStoreCharacter
} from "../../utilities/apiCalls";
import { storeCharacter } from "../../actions";
import Header from "../../components/Header";
import CharacterProfile from "../CharacterProfile";
import LandingPage from "../../components/LandingPage";
import FavoritesMenu from "../FavoritesMenu";
import Footer from "../Footer";
import "./App.css";

let counter = 0;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.initializeStoreWithThreeCharacters();
  };

  getCharacter = async direction => {
    const randomId = this.generateRandomId();
    if (this.stopDuplicates(randomId)) return;

    const character = await getRandomCharacter(randomId);
    console.log(character);

    !this.validateCharacter(character)
      ? await this.getCharacter(direction)
      : await this.props.dispatchStoreCharacter(character, direction);
  };

  initializeStoreWithThreeCharacters = async () => {
    while (this.props.storedCharacters.length < 3) {
      await this.getCharacter("BACK");
    }
  };

  stopDuplicates = (id) => {
    return this.props.storedCharacters.find(char => char.id === id);
  }

  validateCharacter = character => {
    if (!character.show || character === "error") return false;
    if (character.pic.includes("image_not_available")) {
      character.show = false;
      localStoreCharacter(character);
      return false;
    }
    localStoreCharacter(character);
    return true;
  };

  generateRandomId = () => {
    // return counter++;
    return Math.floor(Math.random() * 627) + 1010801;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FavoritesMenu />
        {/* <CharacterProfile getCharacter={this.getCharacter} /> */}
        {/* <LandingPage /> */}
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  storedCharacters: state.characters
});

export const mapDispatchToProps = dispatch => ({
  dispatchStoreCharacter: (character, frontOrBack) =>
    dispatch(storeCharacter(character, frontOrBack))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
