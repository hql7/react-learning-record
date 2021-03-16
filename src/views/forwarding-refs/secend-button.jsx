import React from 'react';

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prvProps) {
      console.log('old:', prvProps);
      console.log('new:', this.props);
    }
    render() {
      const { aaa, ...rest } = this.props
      return <WrappedComponent ref={aaa} {...rest} />
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} aaa={ref} />
  })
}

class SecendButton extends React.Component {
  sayHello() {
    alert('hello 靓仔')
  }
  render() {
    return (
      <button className="secend-button" onClick={this.props.onMinus}>
        {this.props.children}
      </button>
    )
  }
}

export default logProps(SecendButton)