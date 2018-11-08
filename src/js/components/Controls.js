import React, { Fragment } from "react";

import GroupFilter from "./GroupFilter";
import BlockFilter from "./BlockFilter";
import PeriodFilter from "./PeriodFilter";
import VisualElementFilter from "./VisualElementFilter";
import MetalFilter from "./MetalFilter";
import NonMetalFilter from "./NonMetalFilter";
import ClearFilter from "./ClearFilter";
import TemperatureFilter from "./TemperatureFilter";

import Styles from "../../css/Controls.css";

const Controls = ({ setFilter }) => (
  <div>
    <div className={Styles.wrapper}>
      <VisualElementFilter setFilter={setFilter} />
      <TemperatureFilter setFilter={setFilter} />
      <div className={Styles.classificationContainer}>
        <label>Classification</label>
        <MetalFilter setFilter={setFilter} />
        <NonMetalFilter setFilter={setFilter} />
        <ClearFilter setFilter={setFilter} />
      </div>
    </div>
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <GroupFilter setFilter={setFilter} />
        <BlockFilter setFilter={setFilter} />
      </div>
      <PeriodFilter setFilter={setFilter} />
    </div>
  </div>
);

export default Controls;

{
  /* <div className={Styles.wrapper}>
<div className={Styles.container}>
  <GroupFilter setFilter={setFilter} />
  <BlockFilter setFilter={setFilter} />
</div>
<PeriodFilter setFilter={setFilter} />
</div> */
}
