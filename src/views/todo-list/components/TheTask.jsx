import React from 'react';
import '../css/task/index.min.css'

function TheTask(props) {
  const { item, done, selfProps, handleDelTask, handleTransferData } = props
  const unfinishedIcon = (
    <div className="icon-box">
      <i className="iconfont icon-iconfontcheck icon-task icon-left-un" onClick={() => handleTransferData(item)}></i>
      <i className="iconfont icon-icon_shanchu- icon-task icon-right-un" onClick={() => handleDelTask(item)}></i>
    </div>
  )
  const finishedIcon = (
    <div className="icon-box">
      <i className="iconfont icon-chehui icon-task icon-task-fi" onClick={() => handleTransferData(item)}></i>
      <i className="iconfont icon-icon_shanchu- icon-task icon-task-fi" onClick={() => handleDelTask(item)}></i>
    </div>
  )
  return (
    <li className="task-box">
      <div className={done ? 'task-name done-task' : 'task-name'}>{item[selfProps.name]}</div>
      {
        done ? finishedIcon : unfinishedIcon
      }
    </li>
  );
}

export default TheTask;
