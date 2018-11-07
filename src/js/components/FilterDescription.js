import React from "react";
import Styles from "../../css/PeriodicTable.css";
import FilterHeader from "./FilterHeader";
import MetalFilterDescription from "./MetalFilterDescription";
import TemperatureFilterDescription from "./TemperatureFilterDescription";

const FilterDescription = ({ type, desc }) => {
  if (type == "metals" || type == "non-metals") {
    return (
      <div className={Styles.description}>
        <MetalFilterDescription desc={desc} />
      </div>
    );
  }
  return <div className={Styles.description}>{sanitizeInlineHTML(desc)}</div>;
};

const sanitizeInlineHTML = (value = "") => {
  let splitArr = value.split(/<sup>|<\/sup>/i);
  let acc = [];
  if (splitArr.length>1) {
    acc = splitArr.reduce((acc, element, index) => {
      if (/^\d+$/.test(element)) {
        return acc.concat(<sup>{element}</sup>);
      } else {
        let splitBrArr = element.split(/<br\/>/i);
        let accBr = [];
        if(splitBrArr.length>1) {
            accBr = splitBrArr.reduce((accBr, elementBr, index) => {
                let splitItalicTagArr = elementBr.split(/<i>|<\/i>/i);
                let accItalic = [];
                if(splitItalicTagArr.length>1) {
                    accItalic = splitItalicTagArr.reduce((accItalic, elementItalic, index) => {
                        return accItalic.concat(<i>{elementItalic}</i>);
                    }, accItalic)
                    return accBr.concat(...accItalic)
                }
    
                return accBr.concat(elementBr).concat(<br />);
            }, accBr)
            console.log("accBr", accBr)
            return acc.concat(...accBr)
        } else {
            let splitItalicTagArr = element.split(/<i>|<\/i>/i);
            let accItalic = [];
            if(splitItalicTagArr.length>1) {
                accItalic = splitItalicTagArr.reduce((accItalic, elementItalic, index) => {
                    return accItalic.concat(<i>{elementItalic}</i>);
                }, accItalic)
                return acc.concat(...accItalic)
            }
        }
        return acc.concat(element);
      }
    }, acc);
  } else {
    let splitStrongArr = value.split(/<strong>|<\/strong>/i);
    let accStrong = [];
    console.log(splitStrongArr)
    if(splitStrongArr.length>1) {
        accStrong = splitStrongArr.reduce((accStrong, elementStrong, index) => {
            console.log(elementStrong, index, index%2)
            if(index % 2 === 1) {
                return accStrong.concat(<strong>{elementStrong}</strong>);
            } else {
                return accStrong.concat(elementStrong)
            }
        }, accStrong)
        console.log(accStrong)
        return acc.concat(...accStrong)
    } else {
      return value;
    }
  }
  return acc;
};

export default FilterDescription;
