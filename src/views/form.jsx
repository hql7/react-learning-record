// 表单 2021.03.04 weilan 

import { Component } from 'react';
const lovers = [
  { name: '刘亦菲', id: 'liuyifei' },
  { name: '荆苗苗', id: 'jingmiaomiao' },
]
class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      lover: "",
      say: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(key, e) {
    console.log(e.target.value);
    this.setState({ [key]: e.target.value })
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    let { name, lover, say } = this.state
    return (
      <form onSubmit={e => e.preventDefault()}>
        <label>名字：<input value={name} onChange={(e) => this.handleChange('name', e)} /></label>
        <label>
          爱人：
          <select value={lover} onChange={e => this.handleChange('lover', e)}>
            {
              lovers.map(i => (
                <option value={i.id} key={i.id}>{i.name}</option>
              ))
            }
          </select>
        </label>
        <label>表白：<textarea value={say} onChange={e => this.handleChange('say', e)} /></label>
        <button onClick={this.handleSubmit}>提交</button>
      </form>
    )
  }
}

class Res extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      num: 2
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const target = e.target;
    const value = target.name == 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  render() {
    let { isGoing, num } = this.state
    return (
      <form>
        <label>
          参与：
          <input type="text" name="isGoing" type="checkbox" checked={isGoing} onChange={this.handleChange} />
        </label>
        <label>
          来宾人数：
          <input type="text" name="num" type="number" value={num} onChange={this.handleChange} />
        </label>
      </form>
    )
  }
}

export { MyForm, Res }