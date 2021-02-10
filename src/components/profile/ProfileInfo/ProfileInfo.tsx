import React from 'react';
import s from "./ProfileInfo.module.css";
import {newProfileType} from "../../../redux/profile-reduser";
import Preloader from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../redux/redux.store";





type Profileinfotype = {
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void

}



const Profileinfo = (props: Profileinfotype) => {

  //  const authId = useSelector<appStateType, string | undefined>(state => state.profilePage.profile?.photos.large)
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={s.discriptionBlock}>
       {/*        <div>{authId}</div> {authId}*/}
                ava + discriphon
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default Profileinfo