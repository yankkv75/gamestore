import React from 'react'
import { Link, Link as LinkRouter } from 'react-router-dom'

function SignUpScreen() {
    return (
        <div className='sign-in-up-container'>
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
                                        type='text'
                                        name='email'
                                        placeholder='Email'
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
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Confirm password'
                                    />
                                </div>

                                <div className='form-field'>
                                    <button className='btn-sign-in-up-section'>
                                        <LinkRouter to='#' className='btn-link-sign-in-up'>Sign Up</LinkRouter>
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