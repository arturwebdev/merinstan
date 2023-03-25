import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../store/slices/users/usersSlice'

function Register() {

    const regRef = useRef(null)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handlerRegistr = (e) => {
        e.preventDefault()
        dispatch(register({
            avatar: regRef.current[0].value,
            name: regRef.current[1].value,
            username: regRef.current[2].value,
            email: regRef.current[3].value,
            bio: regRef.current[4].value,
            password: regRef.current[5].value
        }))
        navigate("/login")
        regRef.current.reset()
    }

    return (
        <section className='form'>
            <div className='form__cont'>
                <h1>Register </h1>
                <form onSubmit={handlerRegistr} ref={regRef}>
                    <label htmlFor=''>
                        <input type="text" placeholder='Avatar' />
                    </label>
                    <label htmlFor=''>
                        <input type="text" placeholder='Name' />
                    </label>
                    <label htmlFor=''>
                        <input type="text" placeholder='User Name' />
                    </label>
                    <label htmlFor=''>
                        <input type="text" placeholder='Email' />
                    </label>
                    <label htmlFor=''>
                        <input type="text" placeholder='Bio' />
                    </label>
                    <label htmlFor=''>
                        <input type="text" placeholder='Password' />
                    </label>
                    <label htmlFor=''>
                        <input type="submit" value='Register' />
                    </label>
                </form>
                <Link to="/login" className='toogleFormlink'> Log in ? </Link>
            </div>
        </section>
    )
}

export default Register