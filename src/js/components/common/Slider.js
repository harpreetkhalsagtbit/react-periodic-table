import React from "react";


// const Slider = (min="1", max="100", value="50") => (<input type="range" min={min} max={max} value={value}></input>);

class Slider extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value:"0"
        }
        this.onInput = this.onInput.bind(this)
    }

    componentDidMount() {
        this.slider = document.getElementById(this.props.id);
    }
    onInput(e) {
        this.setState({value:this.slider.value}, () => {
            this.props.handleChange(this.state.value)
        });
    }
    render() {
       return <input type="range" {...this.props} onInput={this.onInput} value={this.state.value}></input>
    }
}
export default Slider;
