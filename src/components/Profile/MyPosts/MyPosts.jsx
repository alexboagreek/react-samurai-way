import React from 'react';
import s  from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postData = [
        { id: 1, message: 'Where is Barry? One of the soldiers "S.T.A.R.S"?', likesCount: 12},
        { id: 2, message: 'I saw him in the dinning room', likesCount: 7},
        // { id: 3, message: 'PHP is Power!!' },
        // { id: 4, message: 'JS is Power!!' },
        // { id: 5, message: 'TS is not Power!' }
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )

}

export default MyPosts;