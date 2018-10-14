import React, { Fragment } from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";
import Element from "./Element";

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

  class Container extends React.Component {
    shouldComponentUpdate() {
      return false
    }

    render() {
      return <div className={Styles.container}>{this.props.children}</div>
    }
  }

  class GridWrapper extends React.Component {
    shouldComponentUpdate() {
      return false
    }

    render() {
      return <div className={Styles.wrapper}>{this.props.children}</div>
    }
  }
  const Header = () => (<div className={Styles.header} />)
  const Description = () => (<div className={Styles.description} />)
  const Controls = () => (<div className={Styles.controls}>controls</div>)
  return (
    <Container>
      <Controls/>
      <GridWrapper>
        <Header/>
        {firstRow.map((v, key) => (
          <Element
            key={key}
            index={key}
            className={
              key === 1 ? Styles.cell.concat(" ", Styles.He) : Styles.cell
            }
            value={v}
          />
        ))}
      </GridWrapper>
      <GridWrapper>
        <Description/>
        {secondAndThirdRow.map((v, key) => (
          <Element key={key} index={key} className={Styles.cell} value={v} />
        ))}
      </GridWrapper>
      <GridWrapper>
        {FourthAndFifthRow.map((v, key) => (
          <Element key={key} index={key} className={Styles.cell} value={v} />
        ))}
      </GridWrapper>
      <GridWrapper>
        {SixthRow.map((v, key) => (
          <Element key={key} index={key} className={Styles.cell} value={v} />
        ))}
      </GridWrapper>
      <GridWrapper>
        {SeventhRow.map((v, key) => (
          <Element key={key} index={key} className={Styles.cell} value={v} />
        ))}
      </GridWrapper>
      <GridWrapper>
        {EigthRow.map((v, key) => (
          <Element
            key={key}
            index={key}
            className={
              key === 0
                ? Styles.cell.concat(" ", Styles.fAndPBlock)
                : Styles.cell
            }
            value={v}
          />
        ))}
      </GridWrapper>
      <GridWrapper>
        {NinthRow.map((v, key) => (
          <Element
            key={key}
            index={key}
            className={
              key === 0
                ? Styles.cell.concat(" ", Styles.fAndPBlock)
                : Styles.cell
            }
            value={v}
          />
        ))}
      </GridWrapper>
    </Container>
  );
};

export default PeriodicTable;
