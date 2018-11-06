import React, { Fragment } from "react";

import Styles from "../../css/Controls.css";
import Slider from './common/Slider'

// const TemperatureFilter = ({ setFilter }) => {
//     const handleChange = (value) => {
//         setFilter({
//             id: "",
//             type: "temperature",
//             value: +(value)
//         });
//     };

//     return (
//         <div className={Styles.container}>
//             <label>Temperature 0 K</label>
//             <span>-</span>
//             <Slider id="my" min="0" max="6000" handleChange={handleChange}/>
//             <span>+</span>
//             <label>6000 K</label>
//         </div>
//     )
// }
class TemperatureFilter extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value:0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        this.setState({
            value
        }, () => {
            this.props.setFilter({
                id: "",
                type: "temperature",
                value: +(this.state.value)
            });
        })
    }
    render () {
        return (
            <div className={Styles.container}>
                <label>Temperature 0 K</label>
                <span>-</span>
                <Slider id="my" min="0" max="6000" handleChange={this.handleChange}/>
                <span>+</span>
                <label>6000 K</label>
            </div>
        )    
    }
}
export default TemperatureFilter;
