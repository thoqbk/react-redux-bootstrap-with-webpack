import React, {Component} from "react";
import _ from "lodash";

class Br extends Component {
  render() {
    let lines = this.props.lines || 1;
    let retVal = [];
    _.times(lines, (idx) => {
      retVal.push(<br key={idx}/>);
    });
    return <span>
      {retVal}
    </span>;
  }
}

export default Br;
