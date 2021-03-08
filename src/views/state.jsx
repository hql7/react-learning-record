// state 2021.03.03 weilan 

import { Component } from "react"

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: +new Date() }
  }

  componentDidMount() {
    /* this.Timer = setInterval(() => {
      this.tick()
    }, 1000) */
  }

  componentWillUnmount() {
    // clearInterval(this.Timer)
  }

  tick() {
    this.setState({
      date: +new Date()
    })
  }

  render() {
    return (<div>
      {this.state.date}
    </div>)
  }
}

export default Clock