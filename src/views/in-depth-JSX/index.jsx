import React from 'react';

function Button(props) {
  return (
    <button>{props.value}</button>
  )
}

function Input(props) {
  return (
    <input value={props.value} readOnly />
  )
}

const components = {
  button: Button,
  input: Input
}

function InDepthJsx(props) {
  const DomComponent = components[props.type]
  return (
    <div>
      <DomComponent value={props.value} />
    </div>
  );
}

function MyComponent(props) {
  return <div>{props.value}</div>
}

function NumberDescriber(props) {
  let description;
  if (props.number % 2 === 0) {
    description = <strong>偶数</strong>
  } else {
    description = <i>奇数</i>
  }
  return (
    <div>{props.number} is an {description}</div>
  )
}

function EmitArrayDom() {
  return [
    <li key="q">q</li>,
    <li key="w">w</li>,
    <li key="e">e</li>,
    <li key="r">r</li>,
  ]
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return <div>{items}</div>
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={3}>
      {(index) => <div key={index}>this is item {index} in the list</div>}
    </Repeat>
  )
}

function HasBig() {
  return <div>i was level 6</div>
}

class UiRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'im a input',
      type: 'input',
      num: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    let num = parseInt(Math.random() * 10)
    this.setState(state => {
      return state.type === 'input' ?
        {
          value: 'im a button',
          type: 'button',
          num
        }
        :
        {
          value: 'im a input',
          type: 'input',
          num
        }
    })
  }
  render() {
    const { value, type, num } = this.state
    return (
      <div>
        <button onClick={this.handleChange}>click me</button>
        <InDepthJsx value={value} type={type} />
        <MyComponent value={1 + 2 + 3 + 4} />
        <NumberDescriber number={num} />
        <ul>
          <EmitArrayDom />
        </ul>
        <ListOfTenThings />
        {num >= 6 && <HasBig />}
      </div>
    )
  }
}

export default UiRender;
