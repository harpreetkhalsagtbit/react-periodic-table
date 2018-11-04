import React, { Fragment } from "react";

import GroupFilter from "./GroupFilter";
import BlockFilter from "./BlockFilter";
import PeriodFilter from "./PeriodFilter";
import VisualElementFilter from "./VisualElementFilter";
import MetalFilter from "./MetalFilter";
import NonMetalFilter from "./NonMetalFilter";
import ClearFilter from "./ClearFilter";
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
        <MetalFilter setFilter={setFilter}></MetalFilter>
        <NonMetalFilter setFilter={setFilter}></NonMetalFilter>
        <ClearFilter setFilter={setFilter}></ClearFilter>
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
