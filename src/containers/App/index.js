import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomCharacter } from "../../utilities/apiCalls";
import { storeCharacter } from '../../actions'
import Header from "../../components/Header";
import Main from "../Main";
import "./App.css";

class App extends Component {
  state = { character: {} };

  componentDidMount = () => {
    this.loadCharacter();
  };

  loadCharacter = async () => {
    const randomCharacterId = this.generateRandomCharacterId();
    const character = await getRandomCharacter(randomCharacterId);
    console.log(character);
    if (
      character === "error" ||
      character.pic.includes("image_not_available")
    ) {
      this.loadCharacter();
      return;
    }
    this.props.dispatchStoreCharacter(character)
  };

  generateRandomCharacterId = () => {
    return Math.floor(Math.random() * 627) + 1010801;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        {/* <h3>{this.state.character.name}</h3>
        <p>{this.state.character.description}</p>
        <img src={this.state.character.pic} /> */}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchStoreCharacter: character => dispatch(storeCharacter(character))
});

export default connect(null, mapDispatchToProps)(App);
