import React, { useState } from 'react';
import TheSearch from "./components/TheSearch"
import './css/index/index.min.css'

function TodoList() {
  const [searchKey, setSearchKey] = useState('');
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [unfinishedTasks, setUnfinishedTasks] = useState([]);

  function handleAddTask(value) {
    const task = { id: +new Date(), name: value }
    setUnfinishedTasks([unfinishedTasks.concat(task)])
  }

  return (
    <div className='wl-todo'>
      <TheSearch searchChange={e => setSearchKey(e)} searchEnter={handleAddTask} />
      <div></div>
    </div>
  );
}

function UiRender() {
  return (
    <div className="demo-todo">
      <TodoList />
    </div>
  )
}

export default UiRender;
