import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomCharacter } from "../../utilities/apiCalls";
import { storeCharacter } from "../../actions";
import Header from "../../components/Header";
import CharacterProfile from "../CharacterProfile";
import Main from "../Main";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.initializeStoreWithThreeCharacters();
  };

  getCharacter = async () => {
    const randomCharacterId = this.generateRandomCharacterId();
    const character = await getRandomCharacter(randomCharacterId);
    //console.log(character);
    if (this.validateCharacter(character)) {
      this.getCharacter();
      return;
    }
    this.props.dispatchStoreCharacter(character);
  };

  initializeStoreWithThreeCharacters = async () => {
    while (this.props.storedCharacters.length < 3) {
      await this.getCharacter();
    }
  };

  validateCharacter = data => {
    return data === "error" || data.pic.includes("image_not_available");
  };

  generateRandomCharacterId = () => {
    return Math.floor(Math.random() * 10);

    // return Math.floor(Math.random() * 627) + 1010801;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CharacterProfile />
        {/* <Main /> */}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  storedCharacters: state.characters
});

export const mapDispatchToProps = dispatch => ({
  dispatchStoreCharacter: character => dispatch(storeCharacter(character))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
