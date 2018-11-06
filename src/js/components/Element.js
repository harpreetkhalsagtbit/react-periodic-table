import React from "react";
import Styles from "../../css/Element.css";

let getELementSpecificProperties = ({ value, className, filter }) => {
  console.log(filter)
  let {
    ElementID: elementId,
    GroupID: groupId,
    BlockID: blockId,
    PeriodID: periodId
  } = value;
  let obj = {};

  if (filter.type === "group" && filter.id !== groupId.toString()) {
    groupId = "default";
  } else if (filter.type === "block" && filter.id !== blockId.toString()) {
    groupId = "default";
  } else if (filter.type === "period" && filter.id !== periodId.toString()) {
    groupId = "default";
  } else if (
    filter.type === "lanthanides" &&
    !(elementId >= 57 && elementId <= 71)
  ) {
    groupId = "default";
  } else if (
    filter.type === "actinides" &&
    !(elementId >= 89 && elementId <= 103)
  ) {
    groupId = "default";
  } else if (filter.type === "metals" && value.PropertyID == "1") {
    // do nothing
  } else if (filter.type === "metals" && value.PropertyID == "2") {
    groupId = "default";
  } else if (filter.type === "metals" && value.PropertyID == "4") {
    groupId = "unknown";
  } else if (filter.type === "non-metals" && value.PropertyID == "1") {
    groupId = "default";
  } else if (filter.type === "non-metals" && value.PropertyID == "2") {
    // do nothing
  } else if (filter.type === "non-metals" && value.PropertyID == "4") {
    groupId = "unknown";
  } else if (filter.type === "temperature" && filter.id) {
    console.log("filter temperature")
    if(+(filter.id) < +(value.MeltingPointK)) {
      groupId = "solid"
    } else if(+(filter.id) >= +(value.MeltingPointK) && +(filter.id) < +(value.BoilingPointK)) {
      groupId = "liquid"
    } else if(+(filter.id) >= +(value.BoilingPointK)) {
      groupId = "gas"
      if(!value.BoilingPointK) {
        groupId = "unknown"
      }
    }

  }

  switch (groupId) {
    case 1:
      if (elementId == 1) {
        obj = {
          cell: `${className} ${Styles.element}`,
          name: `${Styles.elementName} ${Styles.hydrogenName}`,
          number: `${Styles.elementNo} ${Styles.hydrogenNumber}`
        };
      } else {
        obj = {
          cell: `${className} ${Styles.element}`,
          name: `${Styles.elementName} ${Styles.groupOneName}`,
          number: `${Styles.elementNo} ${Styles.groupOneNumber}`
        };
      }
      break;
    case 2:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupTwoName}`,
        number: `${Styles.elementNo} ${Styles.groupTwoNumber}`
      };
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupThreeToTwelveName}`,
        number: Styles.elementNo.concat(" ", Styles.groupThreeToTwelveNumber)
      };
      break;
    case 13:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupThirteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupThirteenNumber)
      };
      break;
    case 14:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupFourteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupFourteenNumber)
      };
      break;
    case 15:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupFifteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupFifteenNumber)
      };
      break;
    case 16:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupSixteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupSixteenNumber)
      };
      break;
    case 17:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupSeventeenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupSeventeenNumber)
      };
      break;
    case 18:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupEighteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupEighteenNumber)
      };
      break;
    case 19:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupNineteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupNineteenNumber)
      };
      break;
    case 20:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupTwentyName}`,
        number: Styles.elementNo.concat(" ", Styles.groupTwentyNumber)
      };
      break;
    case "metalloid":
      obj = {
        cell: `${className} ${Styles.element} ${Styles.unknownText}`,
        name: `${Styles.elementName} ${Styles.groupTwentyName}`,
        number: Styles.elementNo.concat(" ", Styles.groupTwentyNumber)
      };
      break;

    case "unknown":
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.unknownName}`,
        number: Styles.elementNo.concat(" ", Styles.unknownNumber)
      };
      break;

    case "solid":
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.solid}`,
        number: Styles.elementNo.concat(" ", Styles.solid)
      };
      break;

    case "liquid":
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.liquid}`,
        number: Styles.elementNo.concat(" ", Styles.liquid)
      };
      break;

    case "gas":
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.gas}`,
        number: Styles.elementNo.concat(" ", Styles.gas)
      };
      console.log(obj)
      break;

    default:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: Styles.elementNameDefault,
        number: Styles.elementNoDefault
      };
      break;
  }
  // Element specific css
  if(value.ElementID == "2") {
    obj.cell = obj.cell.concat(" ", Styles.He);
  } else if(value.ElementID == "5") {
    obj.cell = obj.cell.concat(" ", Styles.B);
  } else if(value.ElementID == "13") {
    obj.cell = obj.cell.concat(" ", Styles.Al);
  }
  // add metaloid css
  if (filter.type === "metals" && value.PropertyID == "3") {
    obj.cell = obj.cell.concat(" ", Styles.metalloid);
  } else if (filter.type === "non-metals" && value.PropertyID == "3") {
    obj.cell = obj.cell.concat(" ", Styles.metalloid);
  }

  return obj;
};

const Element = ({ index, className, value, onHover, filter }) => {
  const onMouseOver = e => {
    e.stopPropagation();
    onHover(value, stylesObj);
  };

  const obj = {
    value,
    className,
    filter
  };
  console.log("here inside element")
  const MurrayImageWidth = [
    "2",
    "55",
    "108",
    "160",
    "213",
    "266",
    "319",
    "371",
    "424",
    "477",
    "530",
    "582",
    "635",
    "688",
    "741",
    "794",
    "847"
  ];
  let stylesObj = getELementSpecificProperties(obj);
  const pStyle = {
    background:
      "url(http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/Images/Button_bdg_Murry.png) scroll no-repeat -2px 0px transparent",
    backgroundPosition: `-${
      MurrayImageWidth[(value.ElementID - 1) % 17]
      }px -${72 * Math.ceil(value.ElementID / 17 - 1)}px`
  };

  return (
    <div
      key={index}
      className={stylesObj.cell}
      style={pStyle}
      onMouseOver={onMouseOver}
    >
      {filter.type !== "visualElements" ? (
        <div className={stylesObj.name}>{value.Symbol}</div>
      ) : (
          ""
        )}
      {filter.type !== "visualElements" ? (
        <div className={stylesObj.number}>{value.ElementID}</div>
      ) : (
          ""
        )}
    </div>
  );
};

export default Element;
