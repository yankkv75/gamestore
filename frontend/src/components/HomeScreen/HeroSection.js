import React from 'react';
import { Link } from 'react-router-dom'
import '../../static/css/HomeScreen/HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/main-video.mp4' autoPlay loop muted />
            <h1>Find your game</h1>
            <p>all gaming novelties in one place</p>
            <button className='hero-btn'>
                <Link to='/sign-in' className='hero-btn-link'>Join Now<i className="fa-solid fa-arrow-right" /></Link>
            </button>
        </div>
    )
}

export default HeroSection