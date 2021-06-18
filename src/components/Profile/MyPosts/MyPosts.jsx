import React from 'react';
import s  from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    return (
        <div> 
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Where Barry? soldiers "S.T.A.R.S"?' likesCount='1'/>
                <Post message='I saw him in the dinning room' likesCount='7'/>
            </div> 
        </div>
    )

}

export default MyPosts;