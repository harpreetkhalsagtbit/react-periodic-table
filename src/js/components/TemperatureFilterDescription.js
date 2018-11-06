import React, { Fragment } from "react";
import Styles from "../../css/TemperatureFilterDescription.css";

const TemperatureFilterDescription = ({ id }) => {
    const tempInKelvin = id;
    function convertKelvinToCelsius(kelvin) {
        if (kelvin < (0)) {
            return 'below absolute zero (0 K)';
        } else {
            return (kelvin-273.15);
        }
    }

    return (
        <div className={`${Styles.container} ${Styles.bottomBorder}`}>
            <ul className={Styles.makeInline}>
                <li className={Styles.solid}></li>
                <li className={`${Styles.text} ${Styles.textSolid}`}>Solid</li>
                <li className={Styles.liquid}></li>
                <li className={`${Styles.text} ${Styles.textLiquid}`}>Liquid</li>
                <li className={Styles.gas}></li>
                <li className={`${Styles.text} ${Styles.textGas}`}>Gas</li>
                <li className={Styles.unknown}></li>
                <li className={`${Styles.text} ${Styles.textUnknown}`}>Unknown</li>
            </ul>
            <ul className={`${Styles.makeInline} ${Styles.topBorder}`}>
                <li className={Styles.textTemperature}>{tempInKelvin}</li>
                <li className={`${Styles.text} ${Styles.labelTemperature}`}>Kelvin</li>
                <li className={Styles.textTemperature}>{Math.ceil(convertKelvinToCelsius(tempInKelvin))}</li>
                <li className={Styles.text}>
                    <span></span>
                    <span className={Styles.labelTemperature}>°</span>
                    <span className={Styles.labelTemperature}>Celcius</span>
                </li>
            </ul>
        </div>
    )
}

export default TemperatureFilterDescription;
