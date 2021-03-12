
// hello world 2021.03.03 weilan 
import { Component } from "react";
import Logo from "@/logo.svg"

function Avater(props) {
  return (
    <img className="avater" src={props.user.url} alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avater user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.auther}></UserInfo>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{props.date}</div>
    </div>
  )
}

class HelloWord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'lilei',
      text: '我一定要证明自己',
      date: '2021.03.12'
    }
  }
  render() {
    let { name, text, date } = this.state
    const user = {
      name,
      url: Logo
    }
    return (
      <Comment auther={user} text={text} date={date} />
    )
  }
}

export default HelloWord
