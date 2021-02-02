import React, {ChangeEvent, useEffect, useState} from "react"
import aaa from "../assets/images/user.png"
import s from './Chat.module.css'

type UserType = {
    message: string
    photo: string | undefined
    userId: number
    userName: string
}

export const Chat = function () {
    let [messange, setMessane] = useState('')
    let [user, setUser] = useState<UserType[]>([])
    let [ws, setWs] = useState<WebSocket>()

// 3. в объекте вс приходит свойство onmessage в нем находится введеный текст
// 4. сзздаем из него объект и делаем копью нового сообщения и с старых сообщений
    if (ws) {
        ws.onmessage = (messange) => {
            let messages = JSON.parse(messange.data)
            setUser([...user, ...messages])
        }
    }


    console.log('render')
//1. делаем запрос в wss
// 2. если запрос пришел сетаем его
    useEffect(() => {
        debugger
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

    return (<div>

        <div>
            <div className={"messanges"}>
                {user.map((u, index) => <div key={index} className={'messange'}>

                        <img className={s.photo} src={u.photo}/><b>{u.userName}</b>
                        <div>{u.message}</div>
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


/*export const Chat = function () {
    const [messange, setMessane] = useState('')
    const [user, setUser] = useState([{id: 1, name: "SA", Photo: aaa, messange: 'Hello'}])

    let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    console.log('render')

    useEffect(() => {

        console.log('useeffect')
        ws.onmessage = (messange) => {
            console.log(messange)
        }

    }, [])


    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessane(e.currentTarget.value)
    }

    const onMessange = () => {
        ws.send(messange)
    }

    return (<div>

        <div>
            <div className={"messanges"}>
                {user.map(u => <div className={'messange'}>

                        <img className={s.usersPhoto} src={u.Photo}/><b>{u.name}</b>
                        <div>{u.messange}</div>
                    </div>
                )}
            </div>
        </div>
        <div>
            <textarea onChange={onMessageChange}/>
            <button onClick={onMessange}>Send</button>
        </div>


    </div>)


}*/

