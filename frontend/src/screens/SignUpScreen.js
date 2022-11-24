import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

function SignUpScreen({ location, history }) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    // getting value from the store
    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    // if user logged in he shouldn't be able to see sign in sreen
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Passwords dont match, please try again')
        } else {
            dispatch(register(username, email, password))
        }
    }

    return (
        <div className='sign-in-up-container'>
            {message && <h1>{message}</h1>}
            {error && <h1>{error}</h1>}
            {loading && <h1>Loading...</h1>}
            <div className='sign-in-up-wrapper'>
                <div className='sign-in-up-row'>
                    <div className='column-log1'>
                        <div className='img-wrap-section'>
                            <img src='images/sign-up.png' className='section-img' alt='sign-up' />
                        </div>
                    </div>
                    <div className='column-log2'>
                        <div className='text-wrapper>'>
                            <p className='top-line'>Sign Up</p>

                            <form onSubmit={submitHandler}>
                                <div className='form-field'>
                                    <input
                                        required
                                        type='username'
                                       
                                        placeholder='Username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <input
                                        required
                                        type='email'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <input
                                        required
                                        type='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <input
                                        required
                                        type='password'
                                        placeholder='Confirm password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <button type='submit' className='btn-sign-in-up-section'>
                                        <div className='btn-link-sign-in-up'>Sign Up</div>
                                    </button>
                                </div>
                                <div className='form-field'>
                                    <p>
                                        Already have an account? <LinkRouter to='/sign-in' className='sign-in-up-link'>Login</LinkRouter>
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

export default SignUpScreen