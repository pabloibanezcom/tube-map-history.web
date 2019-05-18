import React from 'react';

const userPicture = (props) => {

  return <div className="user-picture img-avatar-circle">
    {props.user && props.user.photo ? <img src="assets/img/demo/avatar1.jpg" alt="..." /> : <div className="user-picture-letters">{props.user.firstName[0]}{props.user.lastName[0]}</div>}
  </div>
}

export default userPicture;


