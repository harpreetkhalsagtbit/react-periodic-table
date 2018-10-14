import React, { Fragment } from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";

const PeriodicTable = () => {
  console.log("rendering...");
  console.log(Styles);
  const firstRow = ElementsData.Elements.slice(0, 2);
  const secondAndThirdRow = ElementsData.Elements.slice(2, 18);
  const FourthAndFifthRow = ElementsData.Elements.slice(18, 54);
  const SixthRow = [].concat(
    ElementsData.Elements.slice(54, 57),
    ElementsData.Elements.slice(71, 86)
  );
  const SeventhRow = [].concat(
    ElementsData.Elements.slice(86, 89),
    ElementsData.Elements.slice(103, 118)
  );
  const EigthRow = ElementsData.Elements.slice(57, 71);
  const NinthRow = ElementsData.Elements.slice(89, 103);

  return (
    <div className={Styles.container}>
      <div className={Styles.controls}>controls</div>
      <div className={Styles.wrapper}>
        <div className={Styles.header} />
        {firstRow.map((v, key) => {
          if (key === 1) {
            return (
              <div key={key} className={Styles.cell.concat(" ", Styles.He)}>
                {v.Symbol}
              </div>
            );
          } else {
            return (
              <div key={key} className={Styles.cell}>
                {v.Symbol}
              </div>
            );
          }
        })}
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.description} />
        {secondAndThirdRow.map((v, key) => {
          return (
            <div key={key} className={Styles.cell}>
              {v.Symbol}
            </div>
          );
        })}
      </div>
      <div className={Styles.wrapper}>
        {FourthAndFifthRow.map((v, key) => {
          return (
            <div key={key} className={Styles.cell}>
              {v.Symbol}
            </div>
          );
        })}
      </div>
      <div className={Styles.wrapper}>
        {SixthRow.map((v, key) => {
          return (
            <div key={key} className={Styles.cell}>
              {v.Symbol}
            </div>
          );
        })}
      </div>
      <div className={Styles.wrapper}>
        {SeventhRow.map((v, key) => {
          return (
            <div key={key} className={Styles.cell}>
              {v.Symbol}
            </div>
          );
        })}
      </div>
      <div className={Styles.wrapper}>
        {EigthRow.map((v, key) => {
          if (key === 0) {
            return (
              <div key={key} className={Styles.cell.concat(" ", Styles.fBlock)}>
                {v.Symbol}
              </div>
            );
          } else {
            return (
              <div key={key} className={Styles.cell}>
                {v.Symbol}
              </div>
            );
          }
        })}
      </div>
      <div className={Styles.wrapper}>
        {NinthRow.map((v, key) => {
          if (key === 0) {
            return (
              <div key={key} className={Styles.cell.concat(" ", Styles.fBlock)}>
                {v.Symbol}
              </div>
            );
          } else {
            return (
              <div key={key} className={Styles.cell}>
                {v.Symbol}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PeriodicTable;
