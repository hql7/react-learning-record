// state 2021.03.03 weilan 

import { Component } from "react"

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: +new Date() }
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.Timer)
  }

  tick() {
    this.setState({
      date: +new Date()
    })
  }

  render() {
    return (<div>
      当前时间是：{ new Date(parseInt(this.state.date)).toLocaleString()}
    </div>)
  }
}

export default Clock