import React, { Fragment } from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";
import Element from "./Element";

// This is a design pattern for React - Layout Component
// This must be a Class Component because we need shouldComponentUpdate
// with returning value to be false always to prevent unnecessary rendering
// This could be either a Stateless or Statefull Class Component
class Container extends React.PureComponent {
  render() {
    return <div className={Styles.container}>{this.props.children}</div>;
  }
}

// This is a design pattern for React - Layout Component
// This must be a Class Component because we need shouldComponentUpdate
// with returning value to be false always to prevent unnecessary rendering
// This could be either a Stateless or Statefull Class Component
class GridWrapper extends React.PureComponent {
  render() {
    return (
      <div className={Styles.wrapper} value={this.props.value}>
        {this.props.children}
      </div>
    );
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
const ElementList = ({ row, checkAt = null, secondaryClass = "", onHover }) => (
  <Fragment>
    {row.map((v, key) => (
      <Element
        key={key}
        index={key}
        onHover={onHover}
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
const ElementHeader = ({ value, stylesObj = { number: "", name: "" } }) => {
  console.log(value.Name, stylesObj);
  let selectedElementsNumberClass = stylesObj.number.split(" ").pop();
  return (
    <div
      className={Styles.header.concat(
        " ",
        selectedElementsNumberClass,
        " ",
        Styles.headerSelectedElement
      )}
    >
      {value.Name}
    </div>
  );
};
const keyIsotopes = (elementId = 1) => {
  let isotope = ElementsData.KeyIsotopes[elementId - 1];
  if (isotope.Value.indexOf(",") != -1) {
    var splitComma = isotope.Value.split(",");
    let acc = [];
    acc = splitComma.reduce((acc, element, index) => {
      return acc.concat(sanitizeSubscript(element));
    }, acc);
    return acc;
  } else {
    return sanitizeSubscript(isotope.Value);
  }
};
const sanitizeSubscript = (value = "") => {
  let splitArr = value.split(/<sup>|<\/sup>/i);
  let acc = [];
  acc = splitArr.reduce((acc, element, index) => {
    if (/^\d+$/.test(element)) {
      return acc.concat(<sup>{element}</sup>);
    } else {
      return acc.concat(element);
    }
  }, acc);
  return acc;
};
const getFirstIonisationEnergy = (elementId = 1) => {
  return ElementsData.FirstIonisationEnergies[elementId - 1].Value || "Unknown";
};
const ElementDescription = ({
  value,
  stylesObj = { number: "", name: "" }
}) => {
  console.log(value, "props desc");
  let selectedElementsNumberClass = stylesObj.number.split(" ").pop();
  let selectedElementsNameClass = stylesObj.name.split(" ").pop();
  return (
    <div className={Styles.elementDescription}>
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
      <div className={Styles.elementDescriptionTable}>
        <div>key isotopes</div>
        <div>Electronic Configuration</div>
        <div>
          Density(g cm
          <sup>-3</sup>)
        </div>
        <div>
          1<sup>st</sup> ionisation energy
        </div>
      </div>
      <div className={Styles.elementDescriptionTable}>
        <div>{keyIsotopes(value.ElementID)}</div>
        <div>{sanitizeSubscript(value.ElectronConfiguration)}</div>
        <div>{value.Density || "Unknown"}</div>
        <div>{getFirstIonisationEnergy(value.ElementID)}</div>
      </div>
      <div className={Styles.bigCell}>
        <div
          className={Styles.bigCellLabel.concat(" ", selectedElementsNameClass)}
        >
          <div className={Styles.bigCellLabelIconBigText}>{value.Symbol}</div>
          <div>{value.Name}</div>
        </div>
        <div className={Styles.bigCellDescription}>
          <div
            className={selectedElementsNumberClass.concat(" ", Styles.white)}
          >
            {value.AtomicNumber}
          </div>
          <div className={selectedElementsNameClass}>
            {value.RelativeAtomicMass}
          </div>
        </div>
      </div>
    </div>
  );
};
// const PeriodicTable = () => {
class PeriodicTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedElementDetails: {}
    };

    this.onHover = this.onHover.bind(this);
  }
  onHover(value, stylesObj) {
    this.setState(state => ({ selectedElementDetails: value, stylesObj }));
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
          <ElementHeader
            value={this.state.selectedElementDetails}
            stylesObj={this.state.stylesObj}
          />
          <ElementList
            row={firstRow}
            checkAt={1}
            secondaryClass={Styles.He}
            onHover={this.onHover}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementDescription
            value={this.state.selectedElementDetails}
            stylesObj={this.state.stylesObj}
          />
          <ElementList
            row={secondAndThirdRow}
            className={Styles.cell}
            onHover={this.onHover}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={FourthAndFifthRow}
            className={Styles.cell}
            onHover={this.onHover}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={SixthRow}
            className={Styles.cell}
            onHover={this.onHover}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={SeventhRow}
            className={Styles.cell}
            onHover={this.onHover}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={EigthRow}
            checkAt={0}
            secondaryClass={Styles.fBlock}
            onHover={this.onHover}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={NinthRow}
            checkAt={0}
            secondaryClass={Styles.fBlock}
            onHover={this.onHover}
          />
        </GridWrapper>
      </Container>
    );
  }
}

export default PeriodicTable;
