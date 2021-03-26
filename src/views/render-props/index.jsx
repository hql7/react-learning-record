import React from 'react';
import catImg from "@/assets/images/cat.jpg"
import './index.min.css'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 0, y: 0 }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={catImg} className="cat" alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    )
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h3>移动鼠标！</h3>
        <Mouse children={mouse => (
          <Cat mouse={mouse} />
        )} />
        <Mouse>
          {mouse => (<p>鼠标的位置是 {mouse.x}, {mouse.y}</p>)}
        </Mouse>
      </>
    )
  }
}

class UiRender extends React.Component {
  render() {
    return (
      <div>
        <h2>Render Props</h2>
        <p>术语“render prop”是指一种在React组件之间使用一个值作为函数的prop共享代码的简单技术</p>
        <p>具有render prop的组件接受一个函数，该函数返回一个React元素并调用它而不是自己再实现一遍渲染的逻辑</p>
        <MouseTracker />
      </div>
    )
  }
}

export default UiRender;
