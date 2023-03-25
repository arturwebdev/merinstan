import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost } from '../../store/middlewares/addPostMiddleware';
import { selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {

    const addPostRef = useRef(null)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {currentUser} = useSelector(selectUsers)

    const handleSubmit = (e) => {
        e.preventDefault()
        const [{value: img}, {value: description}] = addPostRef.current
        dispatch(addPost({
            username: currentUser.username,
            img, description
        }))
        navigate("/")
        addPostRef.current.reset()
    }

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={addPostRef} onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                <label className="input-file">
                    <input type="text" name="img"/>
                </label><br/><br/>
                <label className="input-file">
                    <input type="text" name="description"/>
                </label><br/><br/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default CreatePost;
