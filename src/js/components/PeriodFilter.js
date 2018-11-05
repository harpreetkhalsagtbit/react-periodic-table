import React, { Fragment } from "react";

import Styles from "../../css/Controls.css";
import { PERIOD, LANTHANIDES, ACTINIDES } from "./common/Constants";

const periodLength = 7;

const generatePeriodFilter = onClick => {
  return Array.from({ length: periodLength }, (v, k) => (
    <span data-period-id={k + 1} key={k} onClick={onClick}>
      {k + 1}
    </span>
  ));
};
const PeriodFilter = ({ setFilter }) => {
  const onClick = e => {
    const id = e.target.getAttribute("data-period-id");
    setFilter({
      id: e.target.getAttribute("data-period-id"),
      type: "period",
      header: PERIOD[id].HEADER_TEXT,
      desc: PERIOD[id].DESCRIPTION_TEXT
    });
  };
  const onClickLanthanides = () => {
    setFilter({
      id: "",
      type: "lanthanides",
      header: LANTHANIDES.HEADER_TEXT,
      desc: LANTHANIDES.DESCRIPTION_TEXT
    });
  };
  const onClickActindes = () => {
    setFilter({
      id: "",
      type: "actinides",
      header: ACTINIDES.HEADER_TEXT,
      desc: ACTINIDES.DESCRIPTION_TEXT
    });
  };
  return (
    <Fragment>
      <div className={Styles.container}>
        <label>Periods</label>
        {generatePeriodFilter(onClick)}
        <span onClick={onClickLanthanides}>Lanthanides</span>
        <span onClick={onClickActindes}>Actinides</span>
      </div>
    </Fragment>
  );
};

export default PeriodFilter;
