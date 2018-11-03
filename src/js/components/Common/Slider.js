import React from "react";


// const Slider = (min="1", max="100", value="50") => (<input type="range" min={min} max={max} value={value}></input>);

class Slider extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value:"0"
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.slider = document.getElementById(this.props.id);
        console.log(this.props, this.slider)
    }
    onChange(e) {
        console.log(this.slider.value, this.props.id)
        this.setState(state => ({
            value:this.slider.value
        }));
    }
    render() {
       return <input type="range" {...this.props} onInput={this.onChange} value={this.state.value}></input>
    }
}
export default Slider;
