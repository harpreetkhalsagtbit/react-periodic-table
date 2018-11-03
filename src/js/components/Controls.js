import React, { Fragment } from "react";

import GroupFilter from "./GroupFilter";
import BlockFilter from "./BlockFilter";
import PeriodFilter from "./PeriodFilter";
import VisualElementFilter from "./VisualElementFilter";
import Slider from "./Common/Slider";

import Styles from "../../css/Controls.css";

const Controls = ({ setFilter }) => (
  <Fragment>
    <div className={Styles.wrapper}>
      <VisualElementFilter setFilter={setFilter}/>
      <div className={Styles.container}>
        <label>Temperature 0 K</label>
        <span>-</span>
        <Slider id="my" min="0" max="6000" />
        <span>+</span>
        <label>6000 K</label>
      </div>
      <div className={Styles.container}>
        <label>Classification</label>
        <span>Metal</span>
        <span>Non Metal</span>
        <span>Clear filters</span>
      </div>
    </div>
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <GroupFilter setFilter={setFilter} />
        <BlockFilter setFilter={setFilter} />
      </div>
      <PeriodFilter setFilter={setFilter} />
    </div>
  </Fragment>
);

export default Controls;
