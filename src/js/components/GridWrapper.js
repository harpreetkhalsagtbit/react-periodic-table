import React from "react";

import Styles from "../../css/PeriodicTable.css";

// This is a design pattern for React - Layout Component
// This must be a Class Component because we need shouldComponentUpdate
// with returning value to be false always to prevent unnecessary rendering
// This could be either a Stateless or Statefull Class Component
class GridWrapper extends React.PureComponent {
  render() {
    return (
      <div className={Styles.wrapper} value={this.props.value}>
        {this.props.children}
      </div>
    );
  }
}

export default GridWrapper;
