import React from 'react';
import ReactDOM from "react-dom"
const rootDom = document.getElementById('The-context')

function Children() {
  return <span>this is children</span>
}

function Portals(props) {
  return ReactDOM.createPortal(
    props.children,
    rootDom
  )
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    rootDom.appendChild(this.el)
  }
  componentWillUnmount() {
    rootDom.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({ clicks: state.clicks + 1 }))
  }
  render() {
    return (
      <div onClick={this.handleClick} className="hasClick">
        <p>number of clicks: {this.state.clicks}</p>
        <p>打开f12查看：Children组件在真实dom中并不是'hasClick'的子节点，但仍然能触发hasClick的事件，这是因为react组件内部触发的事件会一直冒泡至react树的祖先，即使这些元素并不是真实Dom树的祖先</p>
        <Modal>
          <Children />
        </Modal>
      </div>
    )
  }
}

class UiRender extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="portals">
        <Portals>
          <Children />
        </Portals>
        <Parent />
      </div>
    )
  }
}
export default UiRender;
