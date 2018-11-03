import React, { Fragment } from "react";

import Styles from "../../css/Controls.css";
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
    setFilter({
      id: e.target.getAttribute("data-period-id"),
      type: "period"
    });
  };
  const onClickLanthanides = () => {
    setFilter({
      id: "",
      type: "lanthanides"
    });
  };
  const onClickActindes = () => {
    setFilter({
      id: "",
      type: "actinides"
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
