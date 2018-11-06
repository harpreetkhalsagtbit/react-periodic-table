import React from "react";
import Styles from "../../css/PeriodicTable.css";
import ElementHeader from "./ElementHeader";
import ElementDescription from "./ElementDescription";

const ElementDescriptionContainer = ({ value, stylesObj, supplyRiskColor }) => {
    console.log(value, stylesObj, supplyRiskColor)
    return (
        <div className={Styles.descriptionContainer}>
            <ElementHeader
                value={value}
                stylesObj={stylesObj}
                supplyRiskColor={supplyRiskColor}>
            </ElementHeader>
            <ElementDescription
                value={value}
                stylesObj={stylesObj}>
            </ElementDescription>
        </div>
    )
}

export default ElementDescriptionContainer;