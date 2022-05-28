import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "Default Content",
      quality: "default",
      type: "default",
      seed: 213,
    };
  }

  updateContent = () => {
    this.setState({ url: "ksflsdfksdlfksdfContent!" });
    this.setState({ quality: "123!" });
    this.setState({ type: "!me" });
    this.setState({ seed: 123123 });
  };

  updatesecond = () => {
    this.setState({ url: "samridh!" });
    this.setState({ quality: "wolla!" });
    this.setState({ type: "roman" });
    this.setState({ seed: 999999 });
  };
  render() {
    return (
      <div>
        <div className="h1 bg-secondary text-white text-center p-2">
          {this.state.url}
          {this.state.quality}
          {this.state.type}
          {this.state.seed}
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.updateContent}>
            Click Me
          </button>
          <button className="btn btn-secondary" onClick={this.updatesecond}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}

export default App;
