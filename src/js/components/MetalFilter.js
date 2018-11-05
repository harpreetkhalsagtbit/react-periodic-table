import React from "react";
import { METAL } from "./common/Constants";

import Styles from "../../css/Controls.css";
const MetalFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "metals",
      header:METAL.HEADER_TEXT,
      desc:METAL.DESCRIPTION_TEXT
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Metal</span>
      </div>
  )
}

export default MetalFilter;
