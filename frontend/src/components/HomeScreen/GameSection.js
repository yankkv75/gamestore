import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import '../../static/css/HomeScreen/GameSection.css'
import '../../static/css/HomeScreen/Section.css'

function GameSection() {
    return (
        <div className='game-container' id='games'>
            <div className='section-wrapper'>
                <div className='game-row'>
                    <div className='column1'>
                        <div className='img-wrap-section'>
                            <img src='images/game-section.jpg' className='section-img' alt='Store' />
                        </div>
                    </div>
                    <div className='column2'>
                        <div className='text-wrapper>'>
                            <p className='top-line'>Games</p>
                            <h1 className='heading-game'>Store</h1>
                            <div className='subtitle'>Get access to our store that allows you to buy popular games without getting charged any fees</div>
                            <button className='btn-wrapper-section'>
                                <LinkRouter to='/games' className='btn-link-game'>Get Started</LinkRouter>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSection