import React from 'react';

function callback(...arg) {
  console.log("性能参数：", arg);
}

function Test() {
  return (
    <div>
      打开f12查看性能参数指标：
      <p>
        id, // 发生提交的 Profiler 树的 “id”
      </p>
      <p>
        phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
      </p>
      <p>
        actualDuration, // 本次更新 committed 花费的渲染时间
      </p>
      <p>
        baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
      </p>
      <p>
        startTime, // 本次更新中 React 开始渲染的时间
      </p>
      <p>
        commitTime, // 本次更新中 React committed 的时间
      </p>
      <p>
        interactions // 属于本次更新的 interactions 的集合
      </p>
    </div>
  );
}

class UiRender extends React.Component {
  render() {
    return (
      <React.Profiler id="Test" onRender={callback}>
        <Test />
      </React.Profiler>
    )
  }
}

export default UiRender;
