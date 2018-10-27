import React from "react";

import Styles from "../../css/PeriodicTable.css";

const SupplyRisk = (isHoverActive = false) => {
  return isHoverActive ? (
    <div className={Styles.supplyRisk}>
      <div className={Styles.supplyRiskRows}>
        <div className={Styles.supplyRiskCols}>
          <div
            className={`${Styles.supplyRiskColBlock} ${Styles.highSupplyRisk}`}
          />
          <div className={Styles.supplyRiskColText}>High Supply Risk</div>
        </div>
        <div className={Styles.supplyRiskCols}>
          <div
            className={`${Styles.supplyRiskColBlock} ${Styles.lowSupplyRisk}`}
          />
          <div className={Styles.supplyRiskColText}>Low Supply Risk</div>
        </div>
      </div>
      <div className={Styles.supplyRiskRows}>
        <div className={Styles.supplyRiskCols}>
          <div
            className={`${Styles.supplyRiskColBlock} ${
              Styles.mediumSupplyRisk
            }`}
          />
          <div className={Styles.supplyRiskColText}>Medium Supply Risk</div>
        </div>
        <div className={Styles.supplyRiskCols}>
          <div
            className={`${Styles.supplyRiskColBlock} ${
              Styles.unknownSupplyRisk
            }`}
          />
          <div className={Styles.supplyRiskColText}>Unknown</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SupplyRisk;
