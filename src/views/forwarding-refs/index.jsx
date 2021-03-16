import React, { Component } from 'react';
import SecendButton from './secend-button'

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="fancy-button" onClick={props.onPlus}>
      {props.children}
    </button>
  )
})

const ref1 = React.createRef();
const ref2 = React.createRef();

class UiRender extends Component {
  constructor(props) {
    super(props)
    this.state = { num: 1 }
    this.handleClickPlus = this.handleClickPlus.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
  }

  handleClickPlus() {
    this.setState(state => ({
      num: ++state.num
    }))
  }

  handleClickMinus() {
    this.setState(state => ({
      num: --state.num
    }))
  }

  render() {
    console.log(ref1);
    console.log(ref2);
    return (
      <div>
        <div>{this.state.num}</div>
        <FancyButton ref={ref1} onPlus={this.handleClickPlus}>click me plus</FancyButton>
        <div>
          <SecendButton ref={ref2} label="secend button" onMinus={this.handleClickMinus}>click me minus</SecendButton>
        </div>
      </div>
    )
  }
}

export default UiRender;
