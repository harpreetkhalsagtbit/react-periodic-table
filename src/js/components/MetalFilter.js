import React from "react";

import Styles from "../../css/Controls.css";
const MetalFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "metals"
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Metal</span>
      </div>
  )
}

export default MetalFilter;
