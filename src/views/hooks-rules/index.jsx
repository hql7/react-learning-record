import React, { useEffect, useState } from 'react';

function Form() {
  const [name, setName] = useState('Lilei');

  useEffect(() => {
    localStorage.setItem('formData', name);
  })
}

function HooksRules() {
  return (
    <div>
      <h2>Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则</h2>
      <h3>只在最顶层使用 Hook</h3>
      <p>
        <strong>不要在循环，条件或嵌套函数中调用 Hook，</strong>
        确保总是在你的 React 函数的最顶层调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。
      </p>
      <h3>只在react函数中调用hook</h3>
      <p>在 React 的函数组件中调用 Hook</p>
      <p>在自定义 Hook 中调用其他 Hook</p>
    </div>
  );
}

export default HooksRules;
