import React from "react";
import s from "./Nav.module.css"

let Nav = () => {
    return (
        <div>
            <ul className={s.nav}>
                <li>Main</li>
                <li>Posts</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Nav;