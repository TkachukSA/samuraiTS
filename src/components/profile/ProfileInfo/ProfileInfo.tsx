import React from 'react';
import s from "./ProfileInfo.module.css";
import {newProfileType} from "../../../redux/profile-reduser";
import Preloader from "../../common/Preloader";
import {ProfileiStatus} from "./ProfileStatus";


type Profileinfotype={
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const Profileinfo = (props: Profileinfotype) => {
   if(!props.profile){
       return <Preloader/>
   }
    return (
        <div >
            <div>
           {/*     <img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"  alt={''}/>*/}
            </div>
            <div className={s.discriptionBlock}>
                ava + discriphon
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>
                <ProfileiStatus status={props.status}/>
            </div>
            </div>

    )
}
export default Profileinfo