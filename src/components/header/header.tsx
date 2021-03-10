import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


type HeaderType={
    isAuth: boolean
    login: string | null
    logoutTC: ()=>void

}


const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img alt={'header'} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
            <div className={s.loginBlock}>
                {props.isAuth?
                    <div>{props.login} --- <button onClick={props.logoutTC}>Logout</button></div>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}
export default Header