import React, { Fragment } from "react";

import Styles from "../../css/PeriodicTable.css";

const ElementHeader = ({
  value,
  stylesObj = { number: "", name: "" },
  supplyRiskColor = "unknownSupplyRisk"
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
        <div className={Styles.headerSupplyRiskBlock}>
          <div
            className={`${Styles.supplyRiskColBlock} ${
              Styles[supplyRiskColor]
            }`}
          />
          <span>Supply Risk</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ElementHeader;
