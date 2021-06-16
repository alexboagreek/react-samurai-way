import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

  return (
    <div className={s.content}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTyhSmtHHpQyVLrFZ-RkHI7duAy9i_krHVMg&usqp=CAU"></img>
        </div>
        <div>
            ava + description 
        </div>
        <MyPosts />

    </div>
  )

}

export default Profile;