import React from "react";
import Styles from "../../css/PeriodicTable.css";
import MetalFilterDescription from "./MetalFilterDescription";
import TemperatureFilterDescription from "./TemperatureFilterDescription";

const FilterDescription = ({ desc }) => <div className={Styles.description}><TemperatureFilterDescription desc={desc} /></div>

export default FilterDescription;
