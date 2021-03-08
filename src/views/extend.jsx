// 组合-继承 2021.03.05 weilan 

import { Component } from 'react';

function ColorBorder(props) {
  return (
    <div className={'color-border color-bober' + props.color}>
      <div className="prop-left">
        {props.left}
      </div>
      {props.children}
      <div className="props-right">
        {props.right}
      </div>
    </div>
  );
}

function TheLeft(props) {
  return (
    <h3>{props.left}</h3>
  )
}

function TheRight(props) {
  return (
    <p>{props.right}</p>
  )
}

function SlotBox() {
  let left = "this is left";
  let right = "this is right";
  return (
    <div>
      <ColorBorder
        left={
          <TheLeft left={left} />
        }
        right={
          <TheRight right={right} />
        }
      >
        <p>这是个slot里的内容</p>
      </ColorBorder>
    </div>
  )
}

function Dialog(props) {
  return (
    <div>
      <h3 className="dialog-title">{props.title}</h3>
      <p className="dialog-msg">{props.msg}</p>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <Dialog title="this is a title" msg="this is a msg"></Dialog>
  )
}

class SingUpDialog extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = { name: '' }
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }
  handleSignUp() {
    alert('提交：' + this.state.name)
  }

  render() {
    let title = "this is a Class title"
    let msg = "this is a Class msg"
    let name = this.state.name
    return (
      <Dialog title={title} msg={msg}>
        <input type="text" value={name} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>login</button>
      </Dialog>
    )
  }
}

export { WelcomeDialog, SlotBox, SingUpDialog };
