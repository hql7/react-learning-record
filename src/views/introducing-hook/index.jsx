import React, { useState } from 'react';

function IntroducingHook() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

function Test() {
  const [str, setNum] = useState('hi');
  return (
    <div>
      <p>do u want to say {str} ? </p>
      <button onClick={() => setNum(() => {
        return str + ' lilei '
      })}>click me</button>
    </div>
  )
}

function Test2() {
  const [strTrGG, setStrTrGG] = useState('hi');
  return (
    <div>
      <p>do u want to say {strTrGG} ? </p>
      <button onClick={() => setStrTrGG(() => {
        return strTrGG + ' lilei '
      })}>click me</button>
    </div>
  )
}

function UiRender() {
  return (
    <div>
      <IntroducingHook />
      <Test />
      <Test2 />
    </div>
  )
}

export default UiRender;
