import React, { Fragment } from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";
import Element from "./Element";

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
const Header = () => <div className={Styles.header}>{"Periodic Table"}</div>;
const desc =
  "The Royal Society of Chemistry's interactive periodic table features history, alchemy, podcasts, videos, and data trends across the periodic table. Click the tabs at the top to explore each section. Use the buttons above to change your view of the periodic table and view Murray Robertson’s stunning Visual Elements artwork. Click each element to read detailed information.";
const Description = () => <div className={Styles.description}>{desc}</div>;
const Controls = () => <div className={Styles.controls}>controls</div>;
const ElementDescription = () => {
  return (
    <div className={Styles.elementDescription}>
      <div>
        <img  className={Styles.elementImg} src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/Elements/Cerium-S.png?6.2.0.0" />
      </div>
      <div className={Styles.elementDescriptionTable}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className={Styles.elementDescriptionTable}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className={Styles.bigCell}>
        <div className={Styles.bigCellLabel}>
          <div className={Styles.bigCellLabelIconBigText}>
            Al
          </div>
          <div>Aluminium</div>
        </div>
        <div className={Styles.bigCellDescription}>
          <div>102</div>
          <div>3.23</div>
        </div>
      </div>
    </div>
  );
};
// const PeriodicTable = () => {
class PeriodicTable extends React.PureComponent {
  constructor() {
    super();
  }
  render() {
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
      <Container>
        <Controls />
        <GridWrapper>
          <Header />
          <ElementList row={firstRow} checkAt={1} secondaryClass={Styles.He} />
        </GridWrapper>
        <GridWrapper>
          <ElementDescription />
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
            secondaryClass={Styles.fBlock}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={NinthRow}
            checkAt={0}
            secondaryClass={Styles.fBlock}
          />
        </GridWrapper>
      </Container>
    );
  }
}

export default PeriodicTable;
