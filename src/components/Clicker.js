import React from "react";
import "./Clicker.css";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.upCount = this.upCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.downCount = this.downCount.bind(this);
  }

  upCount() {
    this.setState((pState) => ({ count: pState.count + 1 }));
  }
  downCount() {
    this.setState((pState) => ({ count: pState.count - 1 }));
  }

  resetCount() {
    this.setState(() => ({ count: 0 }));
  }
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Clicker!</h2>
        <div className="display-count">{this.state.count}</div>
        <div className="calc">
          <button className="ui inverted primary button" onClick={this.upCount}>
            +
          </button>
          <button
            className="ui inverted secondary button"
            onClick={this.resetCount}
          >
            reset
          </button>
          <button className="ui inverted red button" onClick={this.downCount}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Clicker;
