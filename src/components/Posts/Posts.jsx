import React from "react";
import s from './Posts.module.css';

let Posts = () => {
    return (
        <div className={s.posts}>
            <ul className={s.listPosts}>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>THis is my first post</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci debitis excepturi harum illum nam officia quia quod temporibus voluptas. Cumque cupiditate deserunt, expedita labore laboriosam omnis reiciendis tempora voluptate.</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur modi odio ut velit! Enim facere in iste nemo optio ratione veritatis. Aliquid consectetur culpa cupiditate dicta obcaecati perferendis repellat!</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>THis is my first post</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci debitis excepturi harum illum nam officia quia quod temporibus voluptas. Cumque cupiditate deserunt, expedita labore laboriosam omnis reiciendis tempora voluptate.</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur modi odio ut velit! Enim facere in iste nemo optio ratione veritatis. Aliquid consectetur culpa cupiditate dicta obcaecati perferendis repellat!</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>THis is my first post</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci debitis excepturi harum illum nam officia quia quod temporibus voluptas. Cumque cupiditate deserunt, expedita labore laboriosam omnis reiciendis tempora voluptate.</div>
                </li>
                <li>
                    <div className={s.title}>Post 1</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur modi odio ut velit! Enim facere in iste nemo optio ratione veritatis. Aliquid consectetur culpa cupiditate dicta obcaecati perferendis repellat!</div>
                </li>

            </ul>
        </div>
    )
}

export default Posts;