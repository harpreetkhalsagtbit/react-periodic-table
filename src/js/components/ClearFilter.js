import React from "react";
import { DEFAULT } from "./common/Constants";

import Styles from "../../css/Controls.css";
const ClearFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "",
      header:DEFAULT.HEADER_TEXT,
      desc:DEFAULT.DESCRIPTION_TEXT
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Clear filters</span>
      </div>
  )
}

export default ClearFilter;
