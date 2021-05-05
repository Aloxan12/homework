import React from 'react'
import Message from './Message'
import AlternativeMessage from './AlternativeMessage'


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Mike Ma',
    message: 'some textsome textsome textsome textsome textsome textsome textangleangleangleangle',
    time: '22:00',
}
const messageData2 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Mike Ma',
    message: 'some textsome',
    time: '22:03',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage />
            <hr/>
        </div>
    )
}

export default HW1
