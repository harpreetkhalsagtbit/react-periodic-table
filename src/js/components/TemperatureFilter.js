import React, { Fragment } from "react";

import Styles from "../../css/Controls.css";
import Slider from './common/Slider'
class TemperatureFilter extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value:0,
            isMouseDown:false
        }
        this.interval = null;
        this.handleChange = this.handleChange.bind(this)
        this.onMouseUpInc = this.onMouseUpInc.bind(this)
        this.onMouseDownInc = this.onMouseDownInc.bind(this)
        this.onMouseUpDec = this.onMouseUpDec.bind(this)
        this.onMouseDownDec = this.onMouseDownDec.bind(this)
        this.incValue = this.incValue.bind(this)
        this.decValue = this.decValue.bind(this)
    }
    onMouseUpInc() {
        this.setState({
            isMouseDown:false
        }, () => {
            clearInterval(this.interval)
        })
    }
    onMouseUpDec() {
        this.setState({
            isMouseDown:true
        }, () => {
            clearInterval(this.interval)
        })
    }
    onMouseDownInc() {
        this.setState({
            isMouseDown:false
        }, () => {
            this.interval = setInterval(this.incValue, 100 /*execute every 100ms*/);
        })
    }
    onMouseDownDec() {
        this.setState({
            isMouseDown:true
        }, () => {
            this.interval = setInterval(this.decValue, 100 /*execute every 100ms*/);
        })
    }
    handleChange(value) {
        this.setState({
            value,
            isMouseDown:true
        }, () => {
            this.props.setFilter({
                id: "",
                type: "temperature",
                value: +(this.state.value)
            });
        })
    }
    incValue() {
        this.setState({
            value: +(this.state.value) + 1 <= 6000?+(this.state.value) + 1:6000,
            isMouseDown:true
        }, () => {
            this.props.setFilter({
                id: "",
                type: "temperature",
                value: +(this.state.value)
            });
        })
    }
    decValue() {
        this.setState({
            value: +(this.state.value) - 1 > 0?+(this.state.value) - 1:0
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
                <span className={Styles.temperatureHandler} onMouseDown={this.onMouseDownDec} onMouseUp={this.onMouseUpDec} >-</span>
                <Slider id="my" min="0" max="6000" handleChange={this.handleChange}/>
                <span className={Styles.temperatureHandler} onMouseDown={this.onMouseDownInc} onMouseUp={this.onMouseUpInc}>+</span>
                <label>6000 K</label>
            </div>
        )    
    }
}
export default TemperatureFilter;
