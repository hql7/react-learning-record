// 循环渲染 2021.03.04 weilan 

function List(props) {
  const { list = [] } = props;
  const itemList = list.map(i =>
    <Item key={i.name} name={i.name} />
  )
  return (<ul>{itemList}</ul>)
}

function Item(props) {
  return (
    <li>{props.name}</li>
  )
}

export default List