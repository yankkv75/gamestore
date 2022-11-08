import React from 'react'
import '../../static/css/HomeScreen/Section.css'
import { Link } from 'react-router-dom';


function BlogSection() {
    return (
        <div className='section-container' id='about'>
            <div className='section-wrapper'>
                <div className='section-row'>
                    <div className='column1'>
                        <div className='text-wrapper'>
                            <p className='top-line'>Blog</p>
                            <h1 className='heading'>Latest News</h1>
                            <div className='subtitle'>Read last news</div>
                            <button className='btn-wrapper-section'>
                                <Link to='/blog' className='btn-link-section'>Read blog</Link>
                            </button>
                        </div>
                    </div>
                    <div className='column2'>
                        <div className='img-wrap-section'>
                            <img src='images/blog.png' className='section-img' alt='section' />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BlogSection