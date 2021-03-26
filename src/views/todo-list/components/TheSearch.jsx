import React from 'react';
import { Input } from 'antd';
import '../css/search/index.min.css'

function TheSearch(props) {
  const placeholder = props.placeholder ?? '请输入任务名搜索或按回车键创建'
  return (
    <div className="m-search">
      <Input
        value={props.value}
        placeholder={placeholder}
        onChange={e => props.searchChange(e.target.value)}
        onPressEnter={e => props.searchEnter(e.target.value)} />
    </div>
  );
}

export default TheSearch;
