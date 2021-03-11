const menuList = [
  {
    id: '1', name: '核心概念', children: [
      { id: '1-1', name: 'Hello world', url: '/hello-word' },
      { id: '1-2', name: 'state & 生命周期', url: '/state' },
      { id: '1-3', name: '事件处理', url: '/event' },
      { id: '1-4', name: '列表 & key', url: '/list' },
      { id: '1-5', name: '表单', url: '/form' },
      { id: '1-6', name: '状态提升', url: '/state-up' },
      { id: '1-7', name: '组合（slot）', url: '/extend' },
      { id: '1-8', name: 'demo（react哲学）', url: '/demo' },
    ]
  },
  {
    id: '2', name: '高级指引', children: [
      { id: '2-1', name: '代码分割', url: 'code-split' }
    ]
  }
]

export default menuList