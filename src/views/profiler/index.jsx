import React from 'react';

function callback(...arg) {
  console.log(arg);
}

function Test() {
  return (
    <div>
      test
    </div>
  );
}

class UiRender extends React.Component {
  render() {
    return (
      <Profiler id="Test" onRender={callback}>
        <Test />
      </Profiler>
    )
  }
}

export default UiRender;
