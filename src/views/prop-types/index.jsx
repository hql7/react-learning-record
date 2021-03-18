import React from 'react';
import PropTypes from "prop-types"

class Test extends React.Component {
  render() {
    return (
      <p>hello {this.props.name}</p>
    )
  }
}
Test.propTypes = {
  name: PropTypes.string
}

class OnlyOneChildren extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
OnlyOneChildren.propTypes = {
  children: PropTypes.element.isRequired
}

class DefaultPropValue extends React.Component {
  render() {
    return (
      <p>hello {this.props.name}</p>
    )
  }
}
DefaultPropValue.defaultProps = {
  name: 1
}
DefaultPropValue.propTypes = {
  name: PropTypes.string
}

class UiRender extends React.Component {
  render() {
    return (
      <div>
        <h3>打开f12查看类型检查错误</h3>
        <Test name={1} />
        <h3>限制单个元素</h3>
        <OnlyOneChildren>
          <p>1</p>
          <p>2</p>
        </OnlyOneChildren>
        <h3>默认prop值+类型验证</h3>
        <DefaultPropValue />
      </div>
    )
  }
}

export default UiRender;
