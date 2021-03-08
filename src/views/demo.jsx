// hello world 2021.03.03 weilan 
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

export default Comment
