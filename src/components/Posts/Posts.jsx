import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";

let Posts = (props) => {

    let postsComponent = props.posts.map(post => <Post className={s.post} title={post.title} shortText={post.text} key={post.id} url={post.picture} date={post.date}/>);

    return (
        <div className={s.posts}>
            <div className={s.listPosts}>
                {postsComponent}
            </div>
            <div>
                <input type="text"></input>
                <textarea></textarea>
                <input type="file" accept="image/*" multiple />
                <button>Create Post</button>
            </div>
        </div>
    )
}

export default Posts;