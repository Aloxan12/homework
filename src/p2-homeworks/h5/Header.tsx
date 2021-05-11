import React from "react";
import { NavLink } from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}></NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}></NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}></NavLink>
            // add NavLinks

        </div>
    );
}

export default Header;
