import React from 'react';
import  s from "./Users.module.css"
import {v1} from "uuid";



export type UsersType={
    id: string
    folowed: boolean
    fullName: string
    status: string
    photo: string
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




function Users(props: UsersPropsType ) {

    if(props.users.length === 0) {
        props.setUsers([
            {
                photo: 'https://www.usawelcome.net/kimg/1200/usa-flag.jpg',
                id: v1(),
                folowed: false,
                fullName: 'Serey Tkachuk',
                status: 'i am fine',
                location: {contry: 'Usa', city: "New York"}
            },
            {
                photo: 'https://www.usawelcome.net/kimg/1200/usa-flag.jpg',
                id: v1(),
                folowed: false,
                fullName: 'Serey ',
                status: 'i love America',
                location: {contry: 'Usa', city: "Bruklin"}
            },
            {
                photo: 'https://www.usawelcome.net/kimg/1200/usa-flag.jpg',
                id: v1(),
                folowed: false,
                fullName: 'Nastia ',
                status: 'i am fine',
                location: {contry: 'Usa', city: "New York"}
            },
        ],)
    }


return<div>

    {

        props.users.map(u => <div key={u.id}>

            <span>
            <div>
                <img src={u.photo} className={s.usersPhoto}/>
                <div>
                    {u.folowed
                        ? <button onClick={()=>{props.UnFollow(u.id)}}>unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>follow</button> }

                </div>
            </div>
                </span>

            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                     </span>

                <span>
                   <div>{u.location.contry}</div>
                   <div>{u.location.city}</div>
               </span>
            </span>


        </div>)
    }


</div>
}


export default Users