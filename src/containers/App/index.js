import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomCharacter } from "../../utilities/apiCalls";
import { storeCharacter } from "../../actions";
import Header from "../../components/Header";
import Main from "../Main";
import "./App.css";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     character: {}
  //   };
  // }
  componentDidMount = () => {
    this.loadCharacter();
  };

  loadCharacter = async () => {
    const randomCharacterId = this.generateRandomCharacterId();
    const character = await getRandomCharacter(randomCharacterId);
    console.log(character)
    if (this.validateCharacter(character)) {
      this.loadCharacter();
      return;
    }
    this.props.dispatchStoreCharacter(character);
    // this.setState({ character })
  };

  validateCharacter = data => {
    return data === "error" || data.pic.includes("image_not_available");
  };

  generateRandomCharacterId = () => {
    return Math.floor(Math.random() * 627) + 1010801;
  };

  render() {
    //const { name, description, pic } = this.state.character;
    return (
      <div className="App">
        <Header />
        {/* <Main /> */}
        {/* <h3>{name}</h3>
        <p>{description}</p>
        <img src={pic} /> */}
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
