import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthPageType} from "../../redux/auth-reduser";

type HeaderType={
    isAuth: boolean
    login: string | null

}


const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>

            <div className={s.loginBlock}>
                {props.isAuth? props.login: <NavLink to="/login">Login</NavLink>}

            </div>
        </header>
    )
}
export default Header