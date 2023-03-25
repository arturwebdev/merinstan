import React from 'react'
import Comment from '../Comment/Comment'

function Comments({ comments }) {
    return (
        <>
            {
                comments.map(el => (
                    <Comment key={el.id} username={el.username} body={el.body} />
                ))
            }
        </>
    )
}

export default Comments