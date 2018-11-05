import React from "react";
import { NON_METAL } from "./common/Constants";

import Styles from "../../css/Controls.css";
const NonMetalFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "non-metals",
      header:NON_METAL.HEADER_TEXT,
      desc:NON_METAL.DESCRIPTION_TEXT
    });
  };

  return (
      <div className={Styles.container}>
        <span onClick={onClick}>Non-metal</span>
      </div>
  )
}

export default NonMetalFilter;
