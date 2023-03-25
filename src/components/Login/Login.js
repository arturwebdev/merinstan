import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersApi'
import { logIn, selectUsers } from '../../store/slices/users/usersSlice'
import "./login.css"

function Login() {

    const loginRef = useRef(null)

    const navigate = useNavigate()

    const {currentUser, usersData} = useSelector(selectUsers)

    const loginSubmit = (e) => {
        e.preventDefault()
        
        const [{value: login}, {value: password}] = loginRef.current

        dispatch(logIn({login, password}))

        loginRef.current.reset()
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if(!usersData.length) {
            dispatch(fetchUsers())
        }
    }, [usersData])
    console.log(usersData);
    useEffect(() => {
        if(currentUser) {
            navigate("/")
        }
    }, [currentUser])

    return (
        <section className='form'>
            <div className='form__cont'>
                <h1>Log in </h1>
                <form ref={loginRef} onSubmit={loginSubmit}>
                    <label htmlFor=''>
                        <input type="text" placeholder='Email' name='login' defaultValue="bret"/>
                    </label>
                    <label htmlFor=''>
                        <input type="text" placeholder='Password' name='password' defaultValue="123" />
                    </label>
                    <label htmlFor=''>
                        <input type="submit" value='Log in' />
                    </label>
                </form>
                <Link to="/register" className='toogleFormlink'> Register ? </Link>
            </div>
        </section>
    )
}

export default Login