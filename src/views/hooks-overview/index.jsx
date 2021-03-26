import React, { useState, useEffect } from 'react';
import './index.min.css'

function MulitVariable() {
  // 相当于class声明变量和修改变量的函数
  const [age, setAge] = useState(27);
  const [todos, setTodos] = useState([{ name: 'react' }])
  const [todo, setTodo] = useState('')

  // 复杂逻辑直接在组件内写函数即可
  function handleTodos() {
    const hadTodo = todos.some(i => i.name === todo)
    if (!todo || hadTodo) return
    const newList = [...todos, { name: todo }]
    setTodos(newList);
    setTodo('')
  }

  return (
    <div>
      <input type="text" value={age} onChange={e => setAge(e.target.value)} />
      <div>
        <h3>任务清单</h3>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button onClick={handleTodos}>添加任务</button>
        <ul>
          {
            todos.map(i => (
              <li key={i.name}> {i.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

function TestEffect() {
  const [num, setNum] = useState(0);

  // 相当于挂载后和更新后两个生命周期
  useEffect(() => {
    document.title = `you clicked ${num} times`
  })

  return (
    <div>
      <p>you clicked {num} times</p>
      <button onClick={() => setNum(num + 1)}>click me</button>
    </div>
  )
}

function Rule() {
  return (
    <div>
      <h3>Hook使用规则</h3>
      <p>1. 只能在函数最外层调用，不要在循环、条件判断或子函数内调用</p>
      <p>2. 只能在react的函数组件中调用，不要在其他函数中调用（自定义hook除外）</p>
    </div>
  )
}

function useHook(){
  return (
    <div>
      <h3>自定义 Hook 更像是一种约定而不是功能</h3>
      <p>如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook</p>
      <p>useSomething 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug。</p>
    </div>
  )
}

function UiRender() {
  return (
    <div>
      <MulitVariable />
      <TestEffect />
      <Rule />
    </div>
  );
}

export default UiRender;
