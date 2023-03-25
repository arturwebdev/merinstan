import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { logOut } from '../../store/slices/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'

function Main() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <Stories />
                    <Posts />
                </div>
                <div className="right-col">
                    <div to='/profile' className="profile-card">
                        <div className="profile-pic">
                            <img src={IMAGES.profile_pic} alt="" />
                        </div>
                        <div>
                            <p className="username">modern_web_channel</p>
                            <p className="sub-text">kunaal kumar</p>
                        </div>
                        <button className="action-btn" onClick={() => {
                            navigate("/login")
                            dispatch(logOut()) 
                        }}>switch</button>
                    </div>
                    <p className="suggestion-text">Suggestions for you</p>
                    <Suggestions />
                </div>
            </div>
        </section>
    )
}

export default Main