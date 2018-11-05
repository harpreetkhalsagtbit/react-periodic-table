import React, { Fragment } from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";
import Container from "./Container";
import GridWrapper from "./GridWrapper";
import ElementList from "./ElementList";
import SupplyRisk from "./SupplyRisk";
import ElementHeader from "./ElementHeader";
import ElementDescription from "./ElementDescription";
import Controls from "./Controls";

// Below are all Stateless Dumb Functional Components
// or Presentational Components
// or View Only Components
const Header = () => <div className={Styles.header}>{"Periodic Table"}</div>;
const desc =
  "The Royal Society of Chemistry's interactive periodic table features history, alchemy, podcasts, videos, and data trends across the periodic table. Click the tabs at the top to explore each section. Use the buttons above to change your view of the periodic table and view Murray Robertson’s stunning Visual Elements artwork. Click each element to read detailed information.";
const Description = () => <div className={Styles.description}>{desc}</div>;

// const PeriodicTable = () => {
class PeriodicTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedElementDetails: {},
      isHoverActive: false,
      filter: {
        type:"",
        value:""
      }
    };

    this.onHover = this.onHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }
  onHover(value, stylesObj) {
    if(!this.state.filter.id && !this.state.filter.type) {
      let relativeSupplyIndex = "unknownSupplyRisk";
      if (!value.RelativeSupplyRiskIndex) {
        relativeSupplyIndex = "unknownSupplyRisk";
      } else if (value.RelativeSupplyRiskIndex < 5) {
        relativeSupplyIndex = "lowSupplyRisk";
      } else if (value.RelativeSupplyRiskIndex == 5) {
        relativeSupplyIndex = "mediumSupplyRisk";
      } else if (value.RelativeSupplyRiskIndex > 5) {
        relativeSupplyIndex = "highSupplyRisk";
      }
      this.setState(state => ({
        selectedElementDetails: value,
        stylesObj,
        supplyRiskColor: relativeSupplyIndex,
        isHoverActive: true
      }));
    }
  }

  componentWillReceiveProps(props) {
    this.setState(state => ({ isHoverActive: props.isHoverActive }));
  }

  setFilter(filter) {
    console.log(filter)
    // reset if same filter action is performed
    if(this.state.filter.type === filter.type && this.state.filter.id === filter.id) {
      filter = { id:"", type: ""}
    }
    this.setState(state => ({filter}))
  }

  onMouseLeave() {
    this.setState({isHoverActive:false})
  }

  render() {
    console.log("rendering...", Styles);
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
      <Container onMouseLeave={this.onMouseLeave}>
        <Controls setFilter={this.setFilter}/>
        <GridWrapper>
          {this.state.isHoverActive ? (
            <Fragment>
              <ElementHeader
                value={this.state.selectedElementDetails}
                stylesObj={this.state.stylesObj}
                supplyRiskColor={this.state.supplyRiskColor}
              />
              {this.state.isHoverActive?<SupplyRisk />:""}
            </Fragment>
          ) : (
            <Header />
          )}
          <ElementList
            row={firstRow}
            checkAt={1}
            secondaryClass={Styles.He}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper>
          {this.state.isHoverActive ? (
            <ElementDescription
              value={this.state.selectedElementDetails}
              stylesObj={this.state.stylesObj}
            />
          ) : (
            <Description />
          )}
          <ElementList
            row={secondAndThirdRow}
            className={Styles.cell}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={FourthAndFifthRow}
            className={Styles.cell}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={SixthRow}
            className={Styles.cell}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={SeventhRow}
            className={Styles.cell}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={EigthRow}
            checkAt={0}
            secondaryClass={Styles.fBlock}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper>
          <ElementList
            row={NinthRow}
            checkAt={0}
            secondaryClass={Styles.fBlock}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
      </Container>
    );
  }
}

export default PeriodicTable;
