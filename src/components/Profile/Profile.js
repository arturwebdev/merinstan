import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from '../../store/middlewares/removePostMiddleware';
import { selectUsers } from '../../store/slices/users/usersSlice';
import './Profile.css'
const Profile = () => {

    const {currentUser} = useSelector(selectUsers)

    const dispatch = useDispatch();

    const handleDelatePost = (id) => {
        dispatch(removePost({id}))
    }

    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={currentUser.avatar} alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{currentUser.name}</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser.postsCount}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <p>{currentUser.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
        {
            currentUser.posts.map(el => (
                <div key={el.id} className="gallery-item">
                    <img src={el.img} className="gallery-image" alt=""/>
                    <div className="gallery-item-info">
                        <button className='remove-post' onClick={() => handleDelatePost(el.id)}>
                            <span></span>
                            <span></span>
                        </button>
                        <ul>
                            <li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
                            <li className="gallery-item-comments"><span >Comments</span> {el.commentsCount}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    
        </>
    );
}

export default Profile;
