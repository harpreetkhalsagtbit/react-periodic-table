import React, { Fragment } from "react";

import Styles from "../../css/Controls.css";
import Slider from './common/Slider'

const TemperatureFilter = ({ setFilter }) => {
    const handleChange = (value) => {
        setFilter({
            id: +(value),
            type: "temperature"
        });
    };

    return (
        <div className={Styles.container}>
            <label>Temperature 0 K</label>
            <span>-</span>
            <Slider id="my" min="0" max="6000" handleChange={handleChange}/>
            <span>+</span>
            <label>6000 K</label>
        </div>
    )
}

export default TemperatureFilter;
