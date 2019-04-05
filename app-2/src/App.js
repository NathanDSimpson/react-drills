import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    family: ["lynne", "jim", "josh", "nate", "james"]
  }

  render() {
    let displayArray = this.state.family.map((person, index) => <h2 key={index}> {person} </h2>)
    return (
      <div className="App">
      {displayArray}
      </div>
    );
  }
}

export default App;
