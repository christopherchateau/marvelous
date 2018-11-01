import React, { Component } from "react";
import { getRandomCharacter } from "../../utilities/apiCalls";
import "./App.css";

class App extends Component {
  state = { character: {} };

  componentDidMount = () => {
    this.loadCharacter();
  };

  loadCharacter = async () => {
    const randomCharacterId = this.generateRandomCharacterId()
    const character = await getRandomCharacter(randomCharacterId);
    if (character && character.pic.includes('image_not_available')) {
      this.loadCharacter();
      return;
    }
    this.setState({ character });
  }

  generateRandomCharacterId = () => {
    return Math.floor(Math.random() * 627) + 1010801;
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.character.name}</h3>
        <p>{this.state.character.description}</p>
        <img src={this.state.character.pic} />
      </div>
    );
  }
}

export default App;
