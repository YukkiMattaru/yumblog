import React from "react";
import s from './Header.module.css'
import Nav from "./Nav/Nav";

let Header = () => {
    return (
        <div className={s.header}>
            <h1>YMBlog</h1>
            <Nav />
        </div>
    )
}

export default Header;