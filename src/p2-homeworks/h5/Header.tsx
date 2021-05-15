import React from "react";
import { NavLink } from "react-router-dom";
import {PATH} from "./Routes";
import style from "./Header.module.css";

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.link} activeClassName={style.active}>Pre junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.link} activeClassName={style.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={style.link} activeClassName={style.active}>Junior plus</NavLink>
            <div className={style.block} />
        </div>
    );
}

export default Header;
