// 循环渲染 2021.03.04 weilan 

function Item(props) {
  return (
    <li>{props.name}</li>
  )
}

function List(props) {
  const { list = [] } = props;
  const itemList = list.map(i =>
    <Item key={i.id} name={i.name} />
  )
  return (<ul>{itemList}</ul>)
}

function Render() {
  const list = [
    { id: '1', name: 'lilei' },
    { id: '2', name: 'liuyifei' }
  ]
  return (
    <List list={list} />
  )
}

export default Render