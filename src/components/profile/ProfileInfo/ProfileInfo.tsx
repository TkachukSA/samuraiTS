import React from 'react';
import s from "./ProfileInfo.module.css";
import {newProfileType} from "../../../redux/profile-reduser";
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type Profileinfotype = {
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void

}


const Profileinfo = (props: Profileinfotype) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={s.discriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default Profileinfo