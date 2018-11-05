import React, { Fragment } from "react";
import Styles from "../../css/MetalFilterDescription.css";

const MetalFilterDescription = ({ desc }) => (
    <Fragment>
        <div>{desc}</div>
        <ul className={Styles.makeInline}>
            <li className={Styles.metalloid}></li>
            <li className={Styles.text}>Metalloid</li>
            <li className={Styles.unknown}></li>
            <li className={Styles.text}>Unknown</li>
        </ul>
    </Fragment>
)

export default MetalFilterDescription;
