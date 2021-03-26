// 事件 2021.03.03 weilan 

import { Component } from "react"

class MyEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }

  handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    return (<div onClick={() => this.handleClick()}>
      {this.state.isOpen ? '开' : '关'}
    </div>)
  }
}

export default MyEvent