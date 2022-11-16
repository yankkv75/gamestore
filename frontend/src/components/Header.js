import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import '../static/css/Header.css'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    const [click, setClick] = useState(false)

    const handlerClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='nav'>
            <div className='navbar-container'>
                <LinkRouter to='/' className='nav-logo' onClick={scrollToTop} >gamestore</LinkRouter>
                <div className='menu-icon' onClick={handlerClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <LinkScroll className='nav-link' to='about' smooth={true} duration={700} spy={true} exact='true' offset={-80} onClick={closeMobileMenu}>Blog</LinkScroll>
                    </li >
                    <li className='nav-item'>
                        <LinkScroll className='nav-link' to='games' smooth={true} duration={700} spy={true} exact='true' offset={-80} onClick={closeMobileMenu}>Games</LinkScroll>
                    </li >
                    <li className='nav-item'>
                        <LinkScroll className='nav-link' to='services' smooth={true} duration={700} spy={true} exact='true' offset={-80} onClick={closeMobileMenu}>Services</LinkScroll>
                    </li >

                    {userInfo ? (
                        <li className='nav-item'>
                            <LinkRouter to='/profile' className='nav-link'>
                                {userInfo.username}
                            </LinkRouter>
                        </li >
                    ) : (
                        <li className='nav-item'>
                            <LinkScroll className='nav-link' to='sign-up' smooth={true} duration={700} spy={true} exact='true' offset={-80} onClick={closeMobileMenu}>Sign Up</LinkScroll>
                        </li >
                    )}
                </ul>
                {userInfo ? (
                    <button onClick={logoutHandler} className='nav-btn'>
                        <div className='nav-btn-link'>Log Out</div>
                    </button>
                ) : (
                    <button className='nav-btn'>
                        <LinkRouter to='/sign-in' className='nav-btn-link'>Sign In</LinkRouter>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Header