// 状态提升 2021.03.04 weilan 

import { Component } from 'react';

// 是否沸腾
function Ft(props) {
  return (
    <div>
      {props.wendu >= 100 ? '沸腾啦' : '未沸腾'}
    </div>
  );

}

const wenduTypes = {
  s: '摄氏度',
  h: '华氏度'
}

class Jsq extends Component {
  constructor(props) {
    super(props)
  }

  handleChange(e, type) {
    this.props.onWenduChange(e.target.value, type)
  }

  render() {
    let wendu = this.props.wendu;
    let type = this.props.wenduType
    return (
      <fieldset>
        <legend>输入{wenduTypes[type]}温度</legend>
        <input type='number' value={wendu} onChange={e => this.handleChange(e, type)} />
      </fieldset>
    )
  }
}

class WenDu extends Component {
  constructor(props) {
    super(props)
    this.state = { wendu: '' }
    this.type = ""
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, type) {
    this.setState({ wendu: value })
    this.type = type
  }

  render() {
    let wendu = this.state.wendu
    let swendu = this.type === 's' ? wendu : transition(wendu, 'h')
    let hwendu = this.type === 'h' ? wendu : transition(wendu, 's')
    return (
      <div>
        <Jsq wendu={swendu} wenduType="s" onWenduChange={this.handleChange} />
        <Jsq wendu={hwendu} wenduType="h" onWenduChange={this.handleChange} />
        <Ft wendu={parseFloat(swendu)} />
      </div>
    )
  }
}

function transition(value, to) {
  if (value === '') return ''
  return to === 'h' ? (value - 32) * 5 / 9 : (value * 9 / 5) + 32
}

export default WenDu;
