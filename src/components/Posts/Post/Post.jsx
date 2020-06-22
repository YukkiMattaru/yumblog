import React from "react";
import s from "./Post.module.css";

let Post = (props) => {
    let url;
    if(props.url) {
        url = <img className={s.image} alt="Post" src={props.url} />
    }

    return (
      <div className={s.post}>
          <div className={s.content}>
            <p className={s.title}>{props.title}</p>
            <p className={s.shortText}>{props.shortText}</p>
            {url}
          </div>
          <p className={s.date}>{props.date}</p>
      </div>
    );
}

export default Post;