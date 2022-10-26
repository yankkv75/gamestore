import React from 'react'
import '../static/css/Footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-wrap'>
                <div className='footer-link-cont'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-item'>
                            <h1>gamestore</h1>
                            <p>gamestore is the ultimate destination for playing, discussing, and creating games.</p>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-item'>
                            <h1>About us</h1>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/games'>Games</a></li>
                            <li><a href='/sign-up'>Sign Up</a></li>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-item'>
                            <h1>Social Media</h1>
                            <li><a href='https://www.youtube.com/' target="_blank" rel="noreferrer">YouTube</a></li>
                            <li><a href='https://www.instagram.com/' target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-item'>
                            <h1>Contact</h1>
                            <li><a href='https://goo.gl/maps/Jy2meESM4pJehZSo7' target="_blank" className='text-link' rel="noreferrer">Kyiv, Ukraine</a></li>
                            <li><a href='tel:+(00)990000000' target="_blank" className='text-link' rel="noreferrer">+(380) 99 000 00 00</a></li>
                            <li><a href='mailto:g-shop@email.com' target="_blank" className='text-link' rel="noreferrer">gamestore@email.com</a></li>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer