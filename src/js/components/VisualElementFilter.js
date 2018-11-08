import React from "react";
import { VISAUAL_ELEMENTS_IMAGES } from "./common/Constants";

import Styles from "../../css/Controls.css";
const VisualElementFilter = ({ setFilter }) => {
  const onClick = e => {
    setFilter({
      id: "",
      type: "visualElements",
      header:VISAUAL_ELEMENTS_IMAGES.HEADER_TEXT,
      desc:VISAUAL_ELEMENTS_IMAGES.DESCRIPTION_TEXT
    });
  };

  return (
      <div className={Styles.visualImagesContainer}>
        <span onClick={onClick}>Visual Element Images</span>
      </div>
  )
}

export default VisualElementFilter;
