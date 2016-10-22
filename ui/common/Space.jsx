import React, {Component} from "react";

class Space extends Component {
  render() {
    if(this.props.width == null) {
      return <span> </span>;
    } else {
      return <span style={{width: this.props.width}}></span>;
    }
  }
}
