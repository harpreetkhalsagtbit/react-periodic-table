import React, { Fragment } from "react";

import Styles from "../../css/PeriodicTable.css";

const VisualFilterElementHeader = ({
  value,
  stylesObj = { number: "", name: "" }
}) => {
  let selectedElementsNumberClass = stylesObj.number.split(" ").pop();
  return (
    <Fragment>
      <div
        className={`${Styles.header} ${selectedElementsNumberClass} ${
          Styles.headerSelectedElement
        }`}
      >
        <div>{value.Name}</div>
      </div>
    </Fragment>
  );
};

export default VisualFilterElementHeader;
