function Avatar({user}) {
    return (
      <img className="card__avatar"      src={user.avatarUrl}      alt={user.name}    />  );
  }

  export default Avatar ;