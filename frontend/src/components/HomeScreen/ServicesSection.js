import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import '../../static/css/HomeScreen/ServicesSection.css'

function ServicesSection() {
    return (
        <div className='services-container' id='services'>
            <h1>Our Services</h1>
            <div className='services-wrapper'>
                <div className='services-card'>
                    <img src='/images/card1.png' className='services-img' alt='service' />
                    <h2>The gamestore distribution</h2>
                    <p>An affordable route for game developers to bring games</p>
                </div>

                <div className='services-card'>
                    <img src='/images/card2.png' className='services-img' alt='service' />
                    <h2>Last gaming news</h2>
                    <p>Read up-to-date news and headlines from the video games industry</p>
                </div>

                <div className='services-card'>
                    <img src='/images/card3.png' className='services-img' alt='service' />
                    <h2>Your account</h2>
                    <p>You can acess our platform online anywhere in the world</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection