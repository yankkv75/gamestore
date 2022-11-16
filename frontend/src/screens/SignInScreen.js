import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

import '../static/css/SignInUp.css'

function SignInScreen({ location, history }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    // getting value from the store
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    // if user logged in he shouldn't be able to see sign in sreen
    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <div className='sign-in-up-container'>
            {error && <h1>{error}</h1>}
            {loading && <h1>Loading...</h1>}
            <div className='sign-in-up-wrapper'>
                <div className='sign-in-up-row'>
                    <div className='column-log1'>
                        <div className='img-wrap-section'>
                            <img src='images/login.png' className='section-img' alt='Sign In' />
                        </div>
                    </div>
                    <div className='column-log2'>
                        <div className='text-wrapper>'>
                            <p className='top-line'>Login</p>

                            <form onSubmit={submitHandler}>
                                <div className='form-field'>
                                    <input
                                        type='username'
                                        name='username'
                                        placeholder='Username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <button type='submit' className='btn-sign-in-up-section'>
                                        <div className='btn-link-sign-in-up'>Login</div>
                                    </button>
                                </div>
                                <div className='form-field'>
                                    <p>
                                        New to gamestore? <LinkRouter to={redirect ? `/sign-up?redirect=${redirect}`: '/sign-up' } className='sign-in-up-link'>Register</LinkRouter>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInScreen