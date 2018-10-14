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

  // This is a design pattern for React - Layout Component
  // This must be a Class Component because we need shouldComponentUpdate
  // with returning value to be false always to prevent unnecessary rendering
  // This could be either a Stateless or Statefull Class Component
  class Container extends React.Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      return <div className={Styles.container}>{this.props.children}</div>;
    }
  }

  // This is a design pattern for React - Layout Component
  // This must be a Class Component because we need shouldComponentUpdate
  // with returning value to be false always to prevent unnecessary rendering
  // This could be either a Stateless or Statefull Class Component
  class GridWrapper extends React.Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      return <div className={Styles.wrapper}>{this.props.children}</div>;
    }
  }

  // This is a Design pattern for React - Container Component
  // It is a View only Container.
  // Other name for this is - Presentational Component
  // It is a Stateless Dumb Functional Component - Not a Class
  // We can also make it a Class Component if we need to use
  // Lifecycle methods to manage certain things, then it would be
  // a Stateless Class Component or StateFull Class Component
  // A Statefull Class Component is actually a Layout Component and
  // A Stateless Functional Component is a Container Component
  const ElementList = ({ row, checkAt = null, secondaryClass = "" }) => (
    <Fragment>
      {row.map((v, key) => (
        <Element
          key={key}
          index={key}
          className={
            key === checkAt
              ? Styles.cell.concat(" ", secondaryClass)
              : Styles.cell
          }
          value={v}
        />
      ))}
    </Fragment>
  );

  // Below are all Stateless Dumb Functional Components
  // or Presentational Components
  // or View Only Components
  const Header = () => <div className={Styles.header} />;
  const Description = () => <div className={Styles.description} />;
  const Controls = () => <div className={Styles.controls}>controls</div>;

  return (
    <Container>
      <Controls />
      <GridWrapper>
        <Header />
        <ElementList row={firstRow} checkAt={1} secondaryClass={Styles.He} />
      </GridWrapper>
      <GridWrapper>
        <Description />
        <ElementList row={secondAndThirdRow} className={Styles.cell} />
      </GridWrapper>
      <GridWrapper>
        <ElementList row={FourthAndFifthRow} className={Styles.cell} />
      </GridWrapper>
      <GridWrapper>
        <ElementList row={SixthRow} className={Styles.cell} />
      </GridWrapper>
      <GridWrapper>
        <ElementList row={SeventhRow} className={Styles.cell} />
      </GridWrapper>
      <GridWrapper>
        <ElementList
          row={EigthRow}
          checkAt={0}
          secondaryClass={Styles.fAndPBlock}
        />
      </GridWrapper>
      <GridWrapper>
        <ElementList
          row={NinthRow}
          checkAt={0}
          secondaryClass={Styles.fAndPBlock}
        />
      </GridWrapper>
    </Container>
  );
};

export default PeriodicTable;
