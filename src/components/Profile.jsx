import React from 'react';
import s from './Profile.module.css';

const Profile = () => {

    return <div className={s.content}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTyhSmtHHpQyVLrFZ-RkHI7duAy9i_krHVMg&usqp=CAU"></img>
        </div>
        <div>
            ava + description 
        </div>
        <div className={s.posts}>
            My Posts
          <div className={s.item}>
              New Post
          </div>
          <div>
            <div className={s.item}>
                post 1
            </div>
          </div>
        </div>

    </div>

}

export default Profile;