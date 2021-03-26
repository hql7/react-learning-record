import React, { useState } from 'react';
import '../css/body/index.min.css'
import TheTask from "./TheTask"

function TheBody(props) {
  const { selfProps, unfinishedTasks, finishedTasks, handleTransferData, handleDelTask } = props;
  if (unfinishedTasks.length || finishedTasks.length) {
    return (
      <ul className="body-tasks">
        {
          unfinishedTasks.map(i => (
            <TheTask
              key={i[selfProps.id]}
              item={i}
              selfProps={selfProps}
              handleTransferData={handleTransferData}
              handleDelTask={handleDelTask}
              done={false} />
          ))
        }
        {
          finishedTasks.map(i => (
            <TheTask
              key={i[selfProps.id]}
              item={i}
              selfProps={selfProps}
              handleTransferData={handleTransferData}
              handleDelTask={handleDelTask}
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
