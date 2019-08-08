import React from 'react';

const userPicture = (props) => {

  const { user } = props;

  return (
    <div className="user-picture img-avatar-circle">
      {user && user.photo ? <img src="assets/img/demo/avatar1.jpg" alt="..." /> : <div className="user-picture-letters">{user.firstName[0]}{user.lastName[0]}</div>}
    </div>
  )
}

export default userPicture;
