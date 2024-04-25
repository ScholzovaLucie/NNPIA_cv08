import UserInfo from "./UserInfo";

function Comment({props}) {

    return (
      <div className="Comment">
        <div className="UserInfo">
        <UserInfo user={props.user} />
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

  export default Comment;