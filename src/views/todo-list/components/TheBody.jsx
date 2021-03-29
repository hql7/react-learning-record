import React from 'react';
import '../css/body/index.min.css'
import TheTask from "./TheTask"

function TheBody(props) {
  const { selfProps, unfinishedTasks, finishedTasks, searchKey, handleTransferData, handleDelTask } = props;
  const myUnfinishedTasks = unfinishedTasks.filter(i => i[selfProps.name].indexOf(searchKey) !== -1)
  const myFinishedTasks = finishedTasks.filter(i => i[selfProps.name].indexOf(searchKey) !== -1)
  if (myUnfinishedTasks.length || myFinishedTasks.length) {
    return (
      <ul className="body-tasks">
        {
          myUnfinishedTasks.map(i => (
            <TheTask
              key={i[selfProps.id]}
              name={i[selfProps.name]}
              onTransfer={() => handleTransferData(i)}
              onDelete={() => handleDelTask(i)}
              done={false} />
          ))
        }
        {
          myFinishedTasks.map(i => (
            <TheTask
              key={i[selfProps.id]}
              name={i[selfProps.name]}
              onTransfer={() => handleTransferData(i)}
              onDelete={() => handleDelTask(i)}
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