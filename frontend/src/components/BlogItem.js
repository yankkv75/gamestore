import React from 'react'
import { Link } from 'react-router-dom'
import '../static/css/Blog.css'

function BlogItem({ post }) {
    return (
        <div className='cards-item'>
            <Link to={`post/${post._id}`} className='cards-item-link'>
                <figure className='cards-item-pic-wrap'>
                    <img
                        className='cards-item-img'
                        src={post.image}
                        alt='post-image'
                    />
                </figure>
                <div className='cards-item-info'>
                    <p className='cards-item-text'>
                        {post.title}
                    </p>
                    <p className='cards-post-time'>{post.time}</p>
                </div>
            </Link>
        </div>
    )
}

export default BlogItem