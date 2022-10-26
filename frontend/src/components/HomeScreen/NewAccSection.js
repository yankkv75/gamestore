import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../../static/css/HomeScreen/Section.css'
import '../../static/css/HomeScreen/NewAccSection.css'

function NewAccSection() {
    return (
        <div className='acc-container' id='sign-up'>
            <div className='section-wrapper'>
                <div className='section-row'>
                    <div className='column1'>
                        <div className='text-wrapper'>
                            <p className='top-line'>gamestore account</p>
                            <h1 className='heading-acc'>Create a new Account</h1>
                            <div className='subtitle'>Get access to buy newest games, news and discounts</div>
                            <button className='btn-wrapper-section'>
                                <LinkRouter to='/sign-up' className='btn-link-acc'>Create an account</LinkRouter>
                            </button>
                        </div>
                    </div>
                    <div className='column2'>
                        <div className='img-wrap-section'>
                            <img src='images/acc-img.png' className='section-img' alt='acc' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewAccSection