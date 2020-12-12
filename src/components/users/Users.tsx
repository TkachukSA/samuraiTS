import React from 'react';
import  s from "./Users.module.css"
import {v1} from "uuid";
import axios, {AxiosResponse} from 'axios';
import userPhoto from "../../assets/images/user.png"



export type UsersType={
    id: string
    folowed: boolean
    name: string
    status: string
    photos: string
    location: {
        contry: string
        city: string
    }
}
export type UsersPropsType={
    users: Array<UsersType>
    follow: (userid: string)=>void
    UnFollow: (userid: string)=>void
    setUsers: (users: Array<UsersType>)=>void
}

class Users extends React.Component<UsersPropsType, any>{
    constructor(props: UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response:AxiosResponse<any>)=>{

            props.setUsers(response.data.items)
        })
    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>

            <span>
            <div>
                <img src={u.photos.small !== null? u.photos: userPhoto} className={s.usersPhoto}/>
                <div>
                    {u.folowed
                        ? <button onClick={()=>{this.props.UnFollow(u.id)}}>unfollow</button>
                        : <button onClick={()=>{this.props.follow(u.id)}}>follow</button> }

                </div>
            </div>
                </span>

                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                     </span>

                <span>
                   <div>{"u.location.contry"}</div>
                   <div>{"u.location.city"}</div>
               </span>
            </span>


                </div>)
            }


        </div>;
    }


}




export default Users