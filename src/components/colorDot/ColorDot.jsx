import "./ColorDot.css";
import React from "react";

class ColorDot extends React.Component {
  setColor(color) {
    this.props.onSetColorNote(color);
  }

  render() {
    const { bg } = this.props;

    return <div className="color" style={{ backgroundColor: bg }} onClick={this.setColor.bind(this, bg)}></div>;
  }
}

export default ColorDot;
