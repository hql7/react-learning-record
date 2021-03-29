import React from 'react';
import '../css/task/index.min.css'

function TheTask(props) {
  const { name, done, onTransfer, onDelete } = props
  const unfinishedIcon = (
    <div className="icon-box">
      <i className="iconfont icon-iconfontcheck icon-task icon-left-un" onClick={() => onTransfer()}></i>
      <i className="iconfont icon-icon_shanchu- icon-task icon-right-un" onClick={() => onDelete()}></i>
    </div>
  )
  const finishedIcon = (
    <div className="icon-box">
      <i className="iconfont icon-chehui icon-task icon-task-fi" onClick={() => onTransfer()}></i>
      <i className="iconfont icon-icon_shanchu- icon-task icon-task-fi" onClick={() => onDelete()}></i>
    </div>
  )
  return (
    <li className="task-box">
      <div className={done ? 'task-name done-task' : 'task-name'}>{name}</div>
      {
        done ? finishedIcon : unfinishedIcon
      }
    </li>
  );
}

export default TheTask;
