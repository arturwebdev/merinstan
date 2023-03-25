import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { showAllCom } from '../../hoc/showAllCom';
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice';
import { selectUsers } from '../../store/slices/users/usersSlice';
import Comments from '../Comments/Comments'

function Post({ id, img, name, likesCount, showCom, openCom, postText, comments, timeAgo }) {

    const addCommentRef = useRef();

    const {currentUser} = useSelector(selectUsers)
    
    const dispatch = useDispatch()

    const  addComments = (e) => {
        e.preventDefault();
        dispatch(addComment({body: addCommentRef.current[0].value, id, username: currentUser.username}))
        addCommentRef.current.reset()
    }

    return (
        <div className="post">
            <div className="info">
                <NavLink style={{ textDecoration: 'none' }} to={`${id}/uniq`} className="user">
                    <div className="profile-pic"><img src={img} alt="" /></div>
                    <p className="username">{name}</p>
                </NavLink>
                <img src={IMAGES.option} className="options" alt="" />
            </div>
            <img src={img} className="post-image" alt="" />
            <div className="post-content">
                <div className="reaction-wrapper">
                    <img src={IMAGES.like} className="icon" alt="" />
                    <img src={IMAGES.comment} className="icon" alt="" />
                    <img src={IMAGES.send} className="icon" alt="" />
                    <img src={IMAGES.save} className="save icon" alt="" />
                </div>
                <p className="likes">{likesCount}</p>
                <p className="description"><span>{name} </span> {postText}</p>
                <p className="post-time">{timeAgo}</p>
                {showCom ? <Comments comments={comments} /> : <button onClick={openCom}>show all comments</button>}
            </div>
            <form ref={addCommentRef} onSubmit={addComments} className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt="" />
                <input onFocus={openCom} type="text" className="comment-box" placeholder="Add a comment"  />
                <button className="comment-btn">post</button>
            </form>
        </div>
    )
}

export default showAllCom(Post) 