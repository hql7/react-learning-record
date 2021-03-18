import React from 'react';

class CreateRefs extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  render() {
    return <div ref={this.myRef}></div>
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    // 创建一个ref来存储textInput的dom元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    // 通过current来访问dom节点，使用原生api使输入框获得焦点
    this.textInput.current.focus();
  }

  sayHi() {
    alert('hi lilei')
  }

  render() {
    // 告诉react我们想把<input>的ref关联到构造器创建的textInput变量
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.textInput.current.focusTextInput()
  }

  handleClick() {
    this.textInput.current.sayHi()
  }

  render() {
    return (
      <div>
        <CustomTextInput ref={this.textInput} />
        <input type="button" value="call child say hi" onClick={this.handleClick} />
      </div>
    )
  }
}

class SayHi extends React.Component {
  sayHi() {
    alert('hi hanmeimei')
  }
  render() {
    return <div></div>
  }
}

function FuncCustomTextInput() {
  const textInput = React.useRef(null)
  const hiDom = React.useRef(null)
  function handleFocus() {
    textInput.current.focus()
  }
  function sayHi() {
    hiDom.current.sayHi()
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleFocus} />
      <div>
        <SayHi ref={hiDom} />
        <input type="button" value="Say hi" onClick={sayHi} />
      </div>
    </div>
  )
}

function logProps(MyComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prvProps) {
      console.log('old', prvProps);
      console.log('new', this.props);
    }
    render() {
      return <MyComponent {...this.props} />
    }
  }
  return LogProps
}

function MyComponent(props) {
  console.log(props);
  return <div>im {props.name}, and i like {props.lover}</div>
}

const NewComponent = logProps(MyComponent);

class ThreeTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null;
    this.setTextInputRef = e => {
      this.textInput = e
    }
    this.focusTextInput = () => {
      this.textInput?.focus()
    }
  }
  componentDidMount() {
    this.focusTextInput()
  }
  render() {
    // 使用ref的回调函数将text输入框dom节点的引用储存到react实例上，如this.textInput
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" value="focus the text input use callback" onClick={this.focusTextInput} />
      </div>
    )
  }
}

function ChildOne(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  )
}

class Parent extends React.Component {
  render() {
    console.log(this.inputElement, 1);
    return (
      <ChildOne inputRef={e => this.inputElement = e} />
    )
  }
}

class UiRender extends React.Component {
  constructor(props) {
    super(props)
    this.hocRef = React.createRef();
  }
  render() {
    console.log(this.hocRef);

    return (
      <div>
        <h3>创建Refs</h3>
        <CreateRefs />
        <h3>为dom添加ref并调用dom原生api</h3>
        <CustomTextInput />
        <h3>为class组件添加ref并使用其内部方法(仅在class组件有效)</h3>
        <AutoFocusTextInput />
        <h3>可在函数组件内部使用ref</h3>
        <FuncCustomTextInput />
        <h3>在高阶组件中转发refs</h3>
        <NewComponent name="lilei" lover="hanmeimei" ref={this.hocRef} />
        <h3>回调refs，不由createRef()创建，而是在回调中接收组件实例或dom元素作为参数，并储存在实例的属性中</h3>
        <ThreeTextInput />
        <h3>组件间传递回调形式的refs</h3>
        <Parent />
      </div>
    )
  }
}

export default UiRender;
