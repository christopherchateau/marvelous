import React, { Component } from "react";
import { getRandomCharacter } from "../../utilities/apiCalls";
import "./App.css";

class App extends Component {

  componentDidMount = () => {
    getRandomCharacter()
  }

  render() {
    return <div className="App">asdf</div>;
  }
}

export default App;
