import React, { Component } from "react";
import "./App.css";
// import Comp1 from "./comps.Comp1.jsx";

class App extends Component {
  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} type='text'></input>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
