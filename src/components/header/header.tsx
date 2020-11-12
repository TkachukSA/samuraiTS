import React from 'react';
import s from "./Header.module.css"

type HeaderPropsType ={

}

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
        </header>
    )
}
export default Header