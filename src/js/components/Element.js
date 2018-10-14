import React, { Fragment } from "react";

const Element = ({ index, className, value }) => {
  return (
    <div key={index} className={className}>
      {value.Symbol}
    </div>
  );
};

export default Element;
