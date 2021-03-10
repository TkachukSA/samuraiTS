import React from 'react';
import s from './User.module.css'
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import {UsersType} from "./Users";


export type UsersPropsType = {
    users: Array<UsersType>
    folowingInProgres: Array<string>
    unFolluwThunk: (userId: string) => void
    FolluwThunk: (userId: string) => void
}


function User(props: UsersPropsType) {

    return <div>

        {
            props.users.map(u => <div key={u.id}>

  <span>
            <div>
                       <NavLink to={'/profile/' + u.id}>
                         <img alt={'photo'}
                              src={u.photos.small !== null ? u.photos.small : userPhoto}
                              className={s.usersPhoto}
                         />
                         </NavLink>
                <div>
                    {u.followed ?
                        <button disabled={props.folowingInProgres.some(id => id === u.id)}
                                onClick={() => {
                                    props.unFolluwThunk(u.id)
                                }}>
                            unfollow
                        </button>
                        :
                        <button disabled={props.folowingInProgres.some(id => id === u.id)}
                                onClick={() => {
                                    props.FolluwThunk(u.id)
                                }}>
                            follow
                        </button>}
                </div>
            </div>
   </span>
                <div>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                   <div>{u.location && u.location}</div>
               </span>
                </div>
            </div>)
        }


    </div>;

}


export default User