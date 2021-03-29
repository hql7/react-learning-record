import React, { useState } from 'react';
import '../css/body/index.min.css'
import TheTask from "./TheTask"

function TheBody(props) {
  const { selfProps, unfinishedTasks, finishedTasks, searchKey, ...rest } = props;
  const myUnfinishedTasks = unfinishedTasks.filter(i => i[selfProps.name].indexOf(searchKey) !== -1)
  const myFinishedTasks = finishedTasks.filter(i => i[selfProps.name].indexOf(searchKey) !== -1)
  if (myUnfinishedTasks.length || myFinishedTasks.length) {
    return (
      <ul className="body-tasks">
        {
          myUnfinishedTasks.map(i => (
            <TheTask
              key={i[selfProps.id]}
              selfProps={selfProps}
              item={i}
              {...rest}
              done={false} />
          ))
        }
        {
          myFinishedTasks.map(i => (
            <TheTask
              key={i[selfProps.id]}
              selfProps={selfProps}
              item={i}
              {...rest}
              done />
          ))
        }
      </ul>
    )
  }
  return (
    <div className="body-no-data">
      暂无数据
    </div>
  );
}

export default TheBody;