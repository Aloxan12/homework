import { type } from 'os';
import React from 'react'
import s from './Message.module.css'

type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messageDataType) {
    return (
        <div>
            <div className={s.message}>
                <div>
                    <img src={props.avatar} alt="#" />
                </div>
                <div className={s.wrapperMassgae}>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                    <time>{props.time}</time>
                    <div className={s.angle}></div>
                </div>
            </div>
        </div>
    )
}

export default Message;
