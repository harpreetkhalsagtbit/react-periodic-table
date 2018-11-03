import React from "react";

import Styles from "../../css/Controls.css";
const BlockFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "visualElements"
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Visual Element Images</span>
      </div>
  )
}

export default BlockFilter;
