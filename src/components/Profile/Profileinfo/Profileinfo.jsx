import React from 'react';
import s from './Profileinfo.module.css';


const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTyhSmtHHpQyVLrFZ-RkHI7duAy9i_krHVMg&usqp=CAU"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )

}

export default  ProfileInfo;