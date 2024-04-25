import Avatar from "./Avatar";

function UserInfo({user}) {
    return (
      <>
      <div class="card__avatar">
      <Avatar user={user} /> 
        </div>
        <div class="card__title">{user.name}</div>
</>
      );
  }

  export default UserInfo;