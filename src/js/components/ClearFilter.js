import React from "react";

import Styles from "../../css/Controls.css";
const ClearFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: ""
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Clear filters</span>
      </div>
  )
}

export default ClearFilter;
