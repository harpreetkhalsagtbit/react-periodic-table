import React from "react";
import Styles from "../../css/PeriodicTable.css";
import FilterHeader from "./FilterHeader";
import MetalFilterDescription from "./MetalFilterDescription";
import TemperatureFilterDescription from "./TemperatureFilterDescription";

const FilterDescription = ({ type, desc }) => {
    if(type == "metals" || type == "non-metals") {
        return (
            <div className={Styles.description}>
                <MetalFilterDescription desc={desc}></MetalFilterDescription>
            </div>
        )
    }
    return (
        <div className={Styles.description}>
            {desc}
        </div>
    )
}

export default FilterDescription;
