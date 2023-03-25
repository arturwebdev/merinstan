import React from 'react'

function Comment({username, body}) {
    return (
        <p className="description"><span>{username} </span> {body}</p>
    )
}

export default Comment