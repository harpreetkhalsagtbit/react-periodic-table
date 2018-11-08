import React, { Fragment } from "react";

import { BLOCK } from "./common/Constants";
import Styles from "../../css/Controls.css";
const BlockFilter = ({ setFilter }) => {
  const onClick = e => {
    const id = e.target.getAttribute("data-block-id");
    setFilter({
      id,
      type: "block",
      header:BLOCK[id].HEADER_TEXT,
      desc:BLOCK[id].DESCRIPTION_TEXT
    });
  };

  const sBlock = "1";
  const pBlock = "2";
  const dBlock = "3";
  const fBlock = "4";
  return (
    <Fragment>
    <div className={Styles.blockContainer}>
      <label>Blocks</label>
      <span onClick={onClick} data-block-id={sBlock}>s</span>
      <span onClick={onClick} data-block-id={pBlock}>p</span>
      <span onClick={onClick} data-block-id={dBlock}>d</span>
      <span onClick={onClick} data-block-id={fBlock}>f</span>
    </div>
    </Fragment>
  )
}

export default BlockFilter;
