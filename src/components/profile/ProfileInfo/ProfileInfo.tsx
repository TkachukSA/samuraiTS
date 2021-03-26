import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import {newProfileType} from "../../../redux/profile-reduser";
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type Profileinfotype = {
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(photo:any)=>void
}


const Profileinfo = (props: Profileinfotype) => {

    if (!props.profile) {
        return <Preloader/>
    }
    const onMinePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if( e.target.files && e.target.files.length){
            props.savePhoto(e.target.files[0])}
    }

    return (
        <div>

            <div className={s.discriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>
                {props.isOwner && <input type={'file'} onChange={onMinePhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default Profileinfo