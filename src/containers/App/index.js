import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomCharacter } from "../../utilities/apiCalls";
import { storeCharacter } from "../../actions";
import Header from "../../components/Header";
import CharacterProfile from "../CharacterProfile";
import LandingPage from "../../components/LandingPage";
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
    const character = await getRandomCharacter(this.generateRandomId());
    console.log(character);

    this.validateCharacter(character)
      ? this.getCharacter()
      : this.props.dispatchStoreCharacter(character, direction);
  };

  initializeStoreWithThreeCharacters = async () => {
    while (this.props.storedCharacters.length < 3) {
      await this.getCharacter("BACK");
    }
  };

  validateCharacter = data => {
    return data === "error" || data.pic.includes("image_not_available");
  };

  generateRandomId = () => {
    // return counter++;
    return Math.floor(Math.random() * 627) + 1010801;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CharacterProfile getCharacter={this.getCharacter} />
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
