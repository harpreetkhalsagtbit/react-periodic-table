import React from "react";
import Styles from "../../css/PeriodicTable.css";
import ElementHeader from "./ElementHeader";
import ElementDescription from "./ElementDescription";
import VisualFilterElementHeader from "./VisualFilterElementHeader";
import VisualFilterElementDescription from "./VisualFilterElementDescription";

const ElementDescriptionContainer = ({
  value,
  stylesObj,
  supplyRiskColor,
  isVisualFilterActive
}) => {
  console.log(value, stylesObj, supplyRiskColor, isVisualFilterActive);
  if (isVisualFilterActive) {
    return (
      <div className={Styles.descriptionContainer}>
        <VisualFilterElementHeader value={value} stylesObj={stylesObj} />
        <VisualFilterElementDescription value={value} />
      </div>
    );
  } else {
    return (
      <div className={Styles.descriptionContainer}>
        <ElementHeader
          value={value}
          stylesObj={stylesObj}
          supplyRiskColor={supplyRiskColor}
        />
        <ElementDescription value={value} stylesObj={stylesObj} />
      </div>
    );
  }
};

export default ElementDescriptionContainer;
