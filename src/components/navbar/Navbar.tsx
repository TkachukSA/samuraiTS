import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


//NavLink - ссылка котроя не обновляет полностью страницу
// to="/profile" - пишется без точек
// activeClassName - описано в сисс (цвет активной ссылки)
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeClassLink}>Profile</NavLink>
            </div>

            <div className={s.item}>
            <NavLink to="dialogs" activeClassName={s.activeClassLink}>Messages</NavLink>
        </div>
            <div className={s.item}>
                <NavLink to="users" activeClassName={s.activeClassLink}>Users</NavLink>
            </div>


            <div className={s.item}>
            <a>News</a>
        </div>
            <div className={s.item}>
            <a>Music</a>
        </div>
            <div className={s.item}>
            <a>Settings</a>
        </div>
        </nav>
    )
}
export default Navbar