import { Link } from 'react-router-dom';
import menuList from "@/utils/menu-data"

function Item(props) {
  return (
    <Link to={props.url}>{props.name}</Link>
  )
}

function Title(props) {
  return (
    <h4>{props.name}</h4>
  )
}

function MenuModule({ name, children }) {
  return (
    <div>
      <Title name={name} />
      {
        children.map(i => (<Item key={i.id} name={i.name} />))
      }
    </div>
  )
}

function Menu() {
  return (
    <div>
      {
        menuList.map(i => (<MenuModule key={i.id} name={i.name} children={i.children} />))
      }
    </div>
  );
}

export default Menu;
