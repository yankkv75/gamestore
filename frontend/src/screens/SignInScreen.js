import React from 'react'
import { Link, Link as LinkRouter } from 'react-router-dom'

import '../static/css/SignInUp.css'

function SignInScreen() {
    return (
        <div className='sign-in-up-container'>
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

                            <form>
                                <div className='form-field'>
                                    <input
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                    />
                                </div>

                                <div className='form-field'>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                    />
                                </div>

                                <div className='form-field'>
                                    <button className='btn-sign-in-up-section'>
                                        <LinkRouter to='#' className='btn-link-sign-in-up'>Login</LinkRouter>
                                    </button>
                                </div>
                                <div className='form-field'>
                                    <p>
                                        New to gamestore? <LinkRouter to='/sign-up' className='sign-in-up-link'>Register</LinkRouter>
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