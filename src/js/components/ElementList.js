import React, { Fragment } from "react";

import Element from "./Element";
import Styles from "../../css/PeriodicTable.css";

// This is a Design pattern for React - Container Component
// It is a View only Container.
// Other name for this is - Presentational Component
// It is a Stateless Dumb Functional Component - Not a Class
// We can also make it a Class Component if we need to use
// Lifecycle methods to manage certain things, then it would be
// a Stateless Class Component or StateFull Class Component
// A Statefull Class Component is actually a Layout Component and
// A Stateless Functional Component is a Container Component
const ElementList = ({ row, checkAt = null, secondaryClass = "", onHover, filter }) => (
  <Fragment>
    {row.map((v, key) => (
      <Element
        key={key}
        index={key}
        onHover={onHover}
        className={
          key === checkAt ? `${Styles.cell} ${secondaryClass}` : Styles.cell
        }
        value={v}
        filter={filter}
      />
    ))}
  </Fragment>
);

export default ElementList;
