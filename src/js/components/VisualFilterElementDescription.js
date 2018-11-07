import React from "react";

import Styles from "../../css/PeriodicTable.css";

const VisualElementDescription = ({ value }) => {
  return (
    <div className={Styles.visualElementDescription}>
      <div>
        <img
          className={Styles.elementImg}
          src={
            "http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/Elements/" +
            value.MurrayImageName +
            "-S.png?6.2.0.0"
          }
        />
      </div>
      <div className={Styles.imageExplanation}>
          {value.ImageExplanation}
      </div>
    </div>
  );
};

export default VisualElementDescription;
