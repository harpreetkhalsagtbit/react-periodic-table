import React, { Fragment } from "react";

import { GROUP } from "./common/Constants";
const groupLength = 18;

const generateGroupFilter = onClick => {
  return Array.from({ length: groupLength }, (v, k) => (
    <span data-group-id={k + 1} key={k} onClick={onClick}>
      {k + 1}
    </span>
  ));
};
const GroupFilter = ({ setFilter }) => {
  const onClick = e => {
    const id = e.target.getAttribute("data-group-id");
    setFilter({
      id,
      type: "group",
      header: GROUP[id].HEADER_TEXT,
      desc: GROUP[id].DESCRIPTION_TEXT
    });
  };

  return (
    <Fragment>
      <div>
        <label>Groups</label>
        {generateGroupFilter(onClick)}
      </div>
    </Fragment>
  );
};

export default GroupFilter;
