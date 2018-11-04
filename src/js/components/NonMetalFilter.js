import React from "react";

import Styles from "../../css/Controls.css";
const NonMetalFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "non-metals"
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Non-metal</span>
      </div>
  )
}

export default NonMetalFilter;
