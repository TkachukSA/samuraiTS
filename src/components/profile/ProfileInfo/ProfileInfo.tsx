import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {newProfileType} from "../../../redux/profile-reduser";
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import ProfileDataForm, {FormDataType, ProfilReduxForm} from "./ProfileDataForm";
import {log} from "util";


type Profileinfotype = {
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
    saveProfile: (photo: any) => void
}


const Profileinfo = (props: Profileinfotype) => {

    const [editmode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader/>
    }
    const onMinePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: FormDataType) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>

            <div className={s.discriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>
                {props.isOwner && <input type={'file'} onChange={onMinePhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {editmode
                    ? <ProfilReduxForm initialValues={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData isOwner={props.isOwner}
                                   profile={props.profile}
                                   goToEditmode={() => setEditMode(true)}/>}
            </div>
        </div>

    )
}
export default Profileinfo

const ProfileData: React.FC<{ profile: newProfileType, isOwner: boolean, goToEditmode: () => void }> = ({profile, goToEditmode, isOwner}) => {
    let contacts: any[] = []
    profile && Object.entries(profile.contacts).forEach(([key, value]) => contacts.push(<div
        key={key}>{value !== null && value !== '' ? `${key}: ${value}` : ``}</div>))

    return <div>
        {isOwner && <div>
            <button onClick={goToEditmode}>edit</button>
        </div>}

        <div>
            <b>full name</b><span style={{'paddingLeft': '10px'}}>{profile.fullName}</span>
        </div>
        <div>
            <b>about me</b><span style={{'paddingLeft': '10px'}}>{profile.aboutMe}</span>
        </div>
        <div>
            <b>looking For a Job</b><span style={{'paddingLeft': '10px'}}>{profile.lookingForAJob ? 'yes' : 'no'}</span>
        </div>
        <div>
            <b>contacts</b>{contacts}
        </div>
    </div>
}

