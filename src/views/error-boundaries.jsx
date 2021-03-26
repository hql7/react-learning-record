import { Component } from 'react';

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getStateError(err) {
    return { hasError: true }
  }
  componentDidCatch(err, info) {
    console.log('err:' + err);
    console.log('info:' + info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

function UiRender() {
  return (
    <ErrorBoundaries>
      <p>这是一个普通标签</p>
      <UiError />
    </ErrorBoundaries>
  )
}

class UiError extends Component {
  constructor(props) {
    super(props)
    this.state = { err: 'err' }
  }
  
  render() {
    return <p>{this.state.err}</p>
  }
}

export default UiRender;
