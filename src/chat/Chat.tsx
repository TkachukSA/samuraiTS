import React, {ChangeEvent, useEffect, useRef, useState} from "react"
import s from './Chat.module.css'
import {useSelector} from "react-redux";
import {appStateType} from "../redux/redux.store";

type UserType = {
    message: string
    photo: string | undefined
    userId: number
    userName: string
}

export const Chat = function () {

    const authId = useSelector<appStateType, number | null>(state => state.auth.id)

    let [messange, setMessane] = useState('')
    let [user, setUser] = useState<UserType[]>([])
    let [ws, setWs] = useState<WebSocket>()

    const h1Ref = useRef<HTMLHeadingElement>(null)


// 3. в объекте вс приходит свойство onmessage в нем находится введеный текст
// 4. сзздаем из него объект и делаем копью нового сообщения и с старых сообщений

    if (ws) {
        ws.onmessage = (messange) => {
            debugger
            let messages = JSON.parse(messange.data)
            setUser([...user, ...messages])
            if (h1Ref && h1Ref.current) {
                h1Ref.current.scrollTo(0, h1Ref.current.scrollHeight)
            }
        }
    }

//1. делаем запрос в wss
//2. если запрос пришел сетаем его
    useEffect(() => {
        let webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        if (webSocket) {
            setWs(webSocket)
        }
    }, [])

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessane(e.currentTarget.value)
    }

    const onMessange = () => {
        if (ws) {
            ws.send(messange)
            setMessane('')
        }
    }

    return (<div className={s.chat}>

        <div>
            <div ref={h1Ref} className={s.messanges}>
                {user.map((u, index) => <div key={index} className={s.messange}>
                        <img className={s.usersPhoto} src={u.photo}/><b><span
                        className={u.userId === authId ? s.span2 : s.span}>{u.userName}</span></b>
                        <span>{u.message}</span>
                    </div>
                )}
            </div>
        </div>
        <div>
            <textarea value={messange} onChange={onMessageChange}/>
            <button onClick={onMessange}>Send</button>
        </div>


    </div>)

}

