import React, { useState, useEffect, createContext } from 'react';

// 一个简单的发布订阅
class PublishSubscribe {
  // 存错映射关系集
  constructor() {
    this.eventMap = {}
  }
  // 订阅
  on(type, handler) {
    // 非函数报错
    if (!handler instanceof Function) {
      throw new Error('请传入一个函数')
    }
    // 判断 type 事件对应的队列是否存在
    if (!this.eventMap[type]) {
      // 若不存在，新建该队列
      this.eventMap[type] = [];
    }
    // 若存在，直接往队列里推入 handler
    this.eventMap[type].push(handler);
  }
  // 发布
  emit(type, params) {
    if (this.eventMap[type]) {
      this.eventMap[type].forEach(handler => {
        handler(params)
      })
    }
  }
  // 关闭订阅
  off(type, handler) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1)
    }
  }
}

const myEvent = new PublishSubscribe();

function Test() {
  const [num, setNum] = useState(0);

  function listenerClick(num) {
    setNum(num)
  }

  useEffect(() => {
    myEvent.on('click', listenerClick)
  }, [])

  function handleClick() {
    myEvent.emit('click', num + 1)
  }

  return (
    <div>
      <div>
        <p>事件触发 {num} 次</p>
      </div>
      <button onClick={() => handleClick()}>clike me</button>
    </div>
  );
}

function TestB() {
  const [str, setStr] = useState('');

  function handler(params) {
    setStr(params)
  }

  function bindHandler() {
    myEvent.on('test', handler)
  }

  return (
    <div>
      <button onClick={() => bindHandler()}>点我监听A的动作</button>
      <div>A传入的内容是{str}</div>
    </div>
  )
}

function TestA() {
  const [msg, setMsg] = useState('我来自A');
  function msgToB() {
    myEvent.emit('test', msg)
  }
  return (
    <button onClick={msgToB}>点我把信息传递给B</button>
  )
}

const AppContext = React.createContext()
const { Provider, Consumer } = AppContext;

function Title() {
  return (
    <Consumer>
      {value => (
        <div>{value.title}</div>
      )}
    </Consumer>
  )
}

function Content() {
  return (
    <Consumer>
      {value => (
        <div>{value.content}</div>
      )}
    </Consumer>
  )
}

function UiRender() {
  const [title, setTitle] = useState('这是title');
  const [content, setContent] = useState('这是content');
  return (
    <div>
      <Test />
      <br />
      <TestB />
      <TestA />
      <Provider value={{ title, content }}>
        <Title />
        <Content />
      </Provider>
    </div>
  )
}

export default UiRender;
