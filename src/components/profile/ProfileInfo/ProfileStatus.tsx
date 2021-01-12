import React, {useState} from "react";
import s from './ProfileInfo.module.css'

type ProfileiStatusType = {
    status: string
}

export const ProfileiStatus: React.FC<ProfileiStatusType> = ({status}) => {


    const [editmode, setEditmode] = useState(true)
    const [statuses, setStatus] = useState(status)


    const ediMode = () => {
        setEditmode(false)
    }
    return (


        <div className={s.status} onDoubleClick={ediMode}>


            {
                editmode ?
                    <div>
                        <span defaultValue={'status'} onDoubleClick={ediMode}>{status}</span>
                    </div> :
                    <div>
                        <input onBlur={() => {
                            setEditmode(true)
                        }}
                               value={statuses}
                               onChange={(e) => {
                                   setStatus(e.currentTarget.value)
                               }}/>

                    </div>
            }


        </div>

    )
}