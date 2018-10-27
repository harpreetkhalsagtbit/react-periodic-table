import React from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";

const ElementDescription = ({
  value,
  stylesObj = { number: "", name: "" }
}) => {
  let selectedElementsNumberClass = stylesObj.number.split(" ").pop();
  let selectedElementsNameClass = stylesObj.name.split(" ").pop();
  return (
    <div className={Styles.elementDescription}>
      <div>
        <img
          className={Styles.elementImg}
          src={
            "http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/Elements/" +
            value.MurrayImageName +
            "-S.png?6.2.0.0"
          }
        />
      </div>
      <div className={Styles.elementDescriptionTable}>
        <div>key isotopes</div>
        <div>Electronic Configuration</div>
        <div>
          Density(g cm
          <sup>-3</sup>)
        </div>
        <div>
          1<sup>st</sup> ionisation energy
        </div>
      </div>
      <div className={Styles.elementDescriptionTable}>
        <div>{keyIsotopes(value.ElementID)}</div>
        <div>{sanitizeSubscript(value.ElectronConfiguration)}</div>
        <div>{value.Density || "Unknown"}</div>
        <div>{getFirstIonisationEnergy(value.ElementID)}</div>
      </div>
      <div className={Styles.bigCell}>
        <div className={`${Styles.bigCellLabel} ${selectedElementsNameClass}`}>
          <div className={Styles.bigCellLabelIconBigText}>{value.Symbol}</div>
          <div>{value.Name}</div>
        </div>
        <div className={Styles.bigCellDescription}>
          <div className={`${selectedElementsNumberClass} ${Styles.white}`}>
            {value.AtomicNumber}
          </div>
          <div className={selectedElementsNameClass}>
            {value.RelativeAtomicMass}
          </div>
        </div>
      </div>
    </div>
  );
};

const keyIsotopes = (elementId = 1) => {
  let isotope = ElementsData.KeyIsotopes[elementId - 1];
  if (isotope.Value.indexOf(",") != -1) {
    var splitComma = isotope.Value.split(",");
    let acc = [];
    acc = splitComma.reduce((acc, element, index) => {
      return acc.concat(sanitizeSubscript(element));
    }, acc);
    return acc;
  } else {
    return sanitizeSubscript(isotope.Value);
  }
};

const sanitizeSubscript = (value = "") => {
  let splitArr = value.split(/<sup>|<\/sup>/i);
  let acc = [];
  acc = splitArr.reduce((acc, element, index) => {
    if (/^\d+$/.test(element)) {
      return acc.concat(<sup>{element}</sup>);
    } else {
      return acc.concat(element);
    }
  }, acc);
  return acc;
};
const getFirstIonisationEnergy = (elementId = 1) => {
  return ElementsData.FirstIonisationEnergies[elementId - 1].Value || "Unknown";
};

export default ElementDescription;
