import { Component, createContext } from 'react';
import './index.css'

function Button(props) {
  return (
    <button className={props.theme}>按钮</button>
  )
}

class ThemeButton extends Component {
  render() {
    return (
      <Button theme={this.props.theme} />
    )
  }
}

function Toolbar(props) {
  //  Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark'
    }
  }
  render() {
    const theme = this.state.theme
    return (
      <div>
        <h3>普通props传递方式：多层级的设定和回调都需要层层转接</h3>
        <Toolbar theme={theme} />
        <h3>使用context，我们可以避免通过中间元素传递props</h3>
        <Context />
        <h3>将组件自身向下传递</h3>
        <Page user="lilei" />
      </div>
    )
  }
}

// 创建默认值为light的上下文组件
const ThemeContext = createContext('light')
// 按钮组件
class ContextThemeButton extends Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />
  }
}
// 中间组件
function ContextToolbar() {
  return (
    <div>
      <ContextThemeButton />
    </div>
  )
}
// 渲染
class Context extends Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <ContextToolbar />
      </ThemeContext.Provider>
    )
  }
}

// 将组件自身向下传递
class Page extends Component {
  constructor(props) {
    super(props)
    this.handleLileiClick = this.handleLileiClick.bind(this)
  }

  handleLileiClick(data) {
    alert('后代组件Avater对祖先组件Page说：' + data)
  }

  render() {
    const user = this.props.user;
    const userLink = (
      <Avatar user={user} onLileiClick={this.handleLileiClick}></Avatar>
    )
    return (
      <div>
        <PageLayout userLink={userLink} />
      </div>
    )
  }
}

class Avatar extends Component {
  constructor(props) {
    super(props)
    this.sayHello = this.sayHello.bind(this)
  }

  sayHello() {
    this.props.onLileiClick('hello')
  }

  render() {
    let user = this.props.user
    return (
      <button onClick={this.sayHello}>{user}</button>
    )
  }
}

function PageLayout(props) {
  return (
    <LayoutMain userLink={props.userLink} />
  )
}
function LayoutMain(props) {
  return (
    <div>
      {props.userLink}
    </div>
  )
}

export default App;
