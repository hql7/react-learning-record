import React from 'react';

class CounterButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true
    }
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }
  handleChange() {
    this.setState(state => ({ count: ++state.count }))
  }
  render() {
    return (
      <button color={this.props.color} onClick={() => this.handleChange()}>Count: {this.state.count}</button>
    )
  }
}

class UiRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue'
    }
  }
  render() {
    return (
      <div>
        <CounterButton color={this.state.color} />
      </div>
    )
  }
}

export default UiRender;
