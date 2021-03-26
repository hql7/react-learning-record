import React, { useState } from 'react';
import './css/index/index.min.css'
import TheSearch from "./components/TheSearch"
import TheBody from "./components/TheBody"

function TodoList(props) {
  const { placeholder, data = [], ...rest } = props
  const [searchKey, setSearchKey] = useState('');
  let finisheds = [], unfinisheds = [];
  const selfProps = {
    done: 'done',
    id: 'id',
    name: 'name',
    ...props.props
  }
  data.forEach(i => {
    i[selfProps.done] ? finisheds.push(i) : unfinisheds.push(i)
  })
  const [finishedTasks, setFinishedTasks] = useState(finisheds);
  const [unfinishedTasks, setUnfinishedTasks] = useState(unfinisheds);

  // 添加新任务
  function handleAddTask(value) {
    if (!value) return
    const task = {
      id: `${+new Date()}-${Math.random()}`,
      [selfProps.name]: value,
      [selfProps.done]: false
    }
    console.log(task);
    setUnfinishedTasks([task].concat(unfinishedTasks))
    setSearchKey('')
  }

  // 已完成<-->未完成任务状态转换
  function handleTransferData(item) {
    if (item[selfProps.done]) {
      const newFinishedTasks = finishedTasks.filter(i => i[selfProps.id] !== item[selfProps.id]);
      setFinishedTasks(newFinishedTasks)
      item[selfProps.done] = false;
      setUnfinishedTasks([item].concat(unfinishedTasks))
    } else {
      const newUnfinishedTasks = unfinishedTasks.filter(i => i[selfProps.id] !== item[selfProps.id]);
      setUnfinishedTasks(newUnfinishedTasks)
      item[selfProps.done] = true;
      setFinishedTasks([item].concat(finishedTasks))
    }
  }

  // 删除任务
  function handleDelTask(item) {
    if (item[selfProps.done]) {
      const newFinishedTasks = finishedTasks.filter(i => i[selfProps.id] !== item[selfProps.id]);
      setFinishedTasks(newFinishedTasks)
    } else {
      const newUnfinishedTasks = unfinishedTasks.filter(i => i[selfProps.id] !== item[selfProps.id]);
      setUnfinishedTasks(newUnfinishedTasks)
    }
  }

  return (
    <div className='wl-todo'>
      <TheSearch
        value={searchKey}
        placeholder={placeholder}
        searchChange={e => setSearchKey(e)}
        searchEnter={handleAddTask} />
      <TheBody
        searchKey={searchKey}
        finishedTasks={finishedTasks}
        unfinishedTasks={unfinishedTasks}
        handleTransferData={handleTransferData}
        handleDelTask={handleDelTask}
        selfProps={selfProps}
        {...rest} />
    </div>
  );
}

function UiRender() {
  const data = [
    { id: "10", label: "完成docker部署微前端", isDone: true },
    { id: "11", label: "进入掘金2020年度作者前80", isDone: false },
    { id: "12", label: "完成2021年第一篇技术文章", isDone: true },
    { id: "13", label: "通过淘系技术考核", isDone: false },
  ]
  const props = { done: 'isDone', name: 'label' }
  return (
    <div className="demo-todo">
      <TodoList data={data} props={props} />
    </div>
  )
}

export default UiRender;
