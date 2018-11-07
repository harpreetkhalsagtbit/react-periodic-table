import React, { Fragment } from "react";

import ElementsData from "../../assets/PeriodicTable";
import Styles from "../../css/PeriodicTable.css";
import Container from "./Container";
import GridWrapper from "./GridWrapper";
import ElementList from "./ElementList";
import SupplyRisk from "./SupplyRisk";
import ElementDescriptionContainer from "./ElementDescriptionContainer";
import Controls from "./Controls";
import FilterHeader from "./FilterHeader";
import FilterDescription from "./FilterDescription";
import DescriptionContainer from "./DescriptionContainer";

import { DEFAULT } from "./common/Constants";

// Below are all Stateless Dumb Functional Components
// or Presentational Components
// or View Only Components
const Header = () => <div className={Styles.header}>{"Periodic Table"}</div>;

// const PeriodicTable = () => {
class PeriodicTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedElementDetails: {},
      isHoverActive: false,
      filter: {
        id:"",
        type:"",
        value:"",
        header: DEFAULT.HEADER_TEXT,
        desc: DEFAULT.DESCRIPTION_TEXT
      },
    };

    this.onHover = this.onHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }
  onHover(value, stylesObj) {
    console.log("onHover....")
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
    } else if(this.state.filter.type == "visualElements") {
      this.setState(state => ({
        selectedElementDetails: value,
        stylesObj,
        supplyRiskColor: '',
        filter:this.state.filter,
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
    if(this.state.filter.type === filter.type && this.state.filter.id === filter.id && this.state.filter.type != "temperature") {
      filter = {
        id:"",
        type: "",
        value:"",
        header: DEFAULT.HEADER_TEXT,
        desc: DEFAULT.DESCRIPTION_TEXT
      }
    }
    this.setState(state => ({filter, isHoverActive:false}))
  }

  onMouseLeave() {
    this.setState({isHoverActive:false})
  }

  render() {
    console.log("rendering...", Styles);
    const firstRow = ElementsData.Elements.slice(0, 57).concat(
      ElementsData.Elements.slice(71, 89),
      ElementsData.Elements.slice(103, 118),
    );
    const secondRow = ElementsData.Elements.slice(57, 71);
    const thirdRow = ElementsData.Elements.slice(89, 103);

    return (
      <Container onMouseLeave={this.onMouseLeave}>
        <Controls setFilter={this.setFilter}/>
        <GridWrapper>
          {this.state.isHoverActive ? (
            <Fragment>
              <ElementDescriptionContainer
                value={this.state.selectedElementDetails}
                stylesObj={this.state.stylesObj}
                supplyRiskColor={this.state.supplyRiskColor}
                isVisualFilterActive={(this.state.filter && this.state.filter.type == "visualElements")?true:false}
              >
              </ElementDescriptionContainer>
              {this.state.isHoverActive && this.state.filter.type != "visualElements"?<SupplyRisk />:""}
            </Fragment>
          ) : (
            <DescriptionContainer filter={this.state.filter}/>
          )}
          <ElementList
            row={firstRow}
            onHover={this.onHover}
            filter={this.state.filter}
          />
        </GridWrapper>
        <GridWrapper secondaryClass={Styles.fBlockMargin}>
          <ElementList
              row={secondRow}
              onHover={this.onHover}
              filter={this.state.filter}
              checkAt={0}
              secondaryClass={Styles.fBlock}
            />
        </GridWrapper>
        <GridWrapper>
          <ElementList
              row={thirdRow}
              onHover={this.onHover}
              filter={this.state.filter}
              checkAt={0}
              secondaryClass={Styles.fBlock}
              />
        </GridWrapper>
      </Container>
    );
  }
}

export default PeriodicTable;
