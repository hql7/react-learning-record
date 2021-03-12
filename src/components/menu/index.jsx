import { Link } from 'react-router-dom';
import menuList from "@/utils/menu-data"
import './index.min.css'

function Item(props) {
  return (
    <p className="menu-item">
      <Link to={props.url}>{props.name}</Link>
    </p>
  )
}

function Title(props) {
  return (
    <h4 className="menu-title">{props.name}</h4>
  )
}

function MenuModule({ name, children }) {
  return (
    <div>
      <Title name={name} />
      {
        children.map(i => (<Item key={i.id} name={i.name} url={i.url} />))
      }
    </div>
  )
}

function Menu() {
  return (
    <div className="the-menu">
      {
        menuList.map(i => (<MenuModule key={i.id} name={i.name} children={i.children} />))
      }
    </div>
  );
}

export default Menu;
