import React, { Fragment } from "react";

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
    setFilter({
      id: e.target.getAttribute("data-group-id"),
      type: "group"
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
