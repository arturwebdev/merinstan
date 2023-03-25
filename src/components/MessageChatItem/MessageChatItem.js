import React from 'react'

function MessageChatItem(props) {
    return (
        <div className={props.currentUserMessage ? "message-chat__item from-current-user" : "message-chat__item " }>
            <p>{props.body}</p>
        </div>
    )
}

export default MessageChatItem