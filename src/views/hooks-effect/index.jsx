import React, { useState, useEffect } from 'react';

class EffectCls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  componentDidMount() {
    document.title = `you clieked ${this.state.num} times`
  }
  componentDidUpdate() {
    document.title = `you clicked ${this.state.num} times`
  }

  render() {
    return (
      <div>
        <p>u clicked {this.state.num} times</p>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>click me</button>
      </div>
    )
  }
}

function EffEtc() {
  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState('hi');

  useEffect(() => {
    console.log('EffEtc更新了');
  })

  return (
    <div>
      <p>num: {num}, msg: {msg}</p>
      <button onClick={() => setNum(num + 1)}>num change</button>
      <button onClick={() => setMsg(msg + 'li')}>msg change</button>
    </div>
  )
}

function ConditionalUpdates() {
  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState('hi');
  const [friend, setFriend] = useState('ruan');

  useEffect(() => {
    console.log('ConditionalEffEtc更新了');
  }, [msg, friend])

  return (
    <div>
      <p>num: {num}, msg: {msg}, friend: {friend}</p>
      <button onClick={() => setNum(num + 1)}>num change</button>
      <button onClick={() => setMsg(msg + 'li')}>msg change</button>
      <button onClick={() => setFriend(friend)}>friend change</button>
    </div>
  )
}

function OnceUpdates() {
  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState('hi');
  const [friend, setFriend] = useState('ruan');

  useEffect(() => {
    console.log('OnceEffEtc: ', num, msg, friend);
  }, [])

  return (
    <div>
      <p>num: {num}, msg: {msg}, friend: {friend}</p>
      <button onClick={() => setNum(num + 1)}>num change</button>
      <button onClick={() => setMsg(msg + 'li')}>msg change</button>
      <button onClick={() => setFriend(friend)}>friend change</button>
    </div>
  )
}

function HooksEffect() {
  return (
    <div>
      <div>
        <h3>useEffect 做了什么？</h3>
        <p>通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它</p>
        <h3>为什么在组件内部调用 useEffect？</h3>
        <p>将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API</p>
        <h3>useEffect 会在每次渲染后都执行吗？</h3>
        <p>是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。</p>
        <h3>为什么要在 effect 中返回一个函数？</h3>
        <p>这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分</p>
        <h3>React 何时清除 effect？</h3>
        <p>React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除</p>
      </div>
      <EffectCls />
      <h3>默认effetc</h3>
      <EffEtc />
      <h3>条件effetc</h3>
      <ConditionalUpdates />
      <p>上面这个示例中，我们传入 [count] 作为第二个参数。这个参数是什么作用呢？如果 count 的值是 5，而且我们的组件重渲染的时候 count 还是等于 5，React 将对前一次渲染的 [5] 和后一次渲染的 [5] 进行比较。因为数组中的所有元素都是相等的(5 === 5)，React 会跳过这个 effect，这就实现了性能的优化。

当渲染时，如果 count 的值更新成了 6，React 将会把前一次渲染时的数组 [5] 和这次渲染的数组 [6] 中的元素进行对比。这次因为 5 !== 6，React 就会再次调用 effect。如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。</p>
      <h3>只在初始时调用一次</h3>
      <OnceUpdates />
      <p>传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。</p>
      <p>如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。</p>
      <p>但我们有更好的方式来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便。</p>
    </div>
  );
}

export default HooksEffect;
