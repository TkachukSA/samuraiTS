import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../Profile";
import {UsersType} from "../../users/Users";
import {newProfileType} from "../../../redux/profile-reduser";
import Preloader from "../../common/Preloader";


type Profileinfotype={
    profile: newProfileType | null

}

const Profileinfo = (props: Profileinfotype) => {
   if(!props.profile){
       return <Preloader/>
   }
    return (
        <div >
            <div>
                <img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"/>
            </div>
            <div className={s.discriptionBlock}>
                ava + discriphon
                <div>{props.profile.fullName}</div>
                <img src={props.profile?.photos.large}/>
            </div>
            </div>

    )
}
export default Profileinfo