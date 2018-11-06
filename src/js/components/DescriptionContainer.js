import React from "react";
import Styles from "../../css/PeriodicTable.css";
import FilterHeader from "./FilterHeader";
import FilterDescription from "./FilterDescription";
import TemperatureFilterDescription from "./TemperatureFilterDescription";

const DescriptionContainer = ({ filter }) => {
    console.log(filter)
    if(filter.type == "temperature") {
        return (
            <div className={Styles.descriptionContainer}>
                <TemperatureFilterDescription {...filter}/>
            </div>
        )
    }
    return (
        <div className={Styles.descriptionContainer}>
            <FilterHeader {...filter}/>
            <FilterDescription {...filter}/>
        </div>
    )
}

export default DescriptionContainer;