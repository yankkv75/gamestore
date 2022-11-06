import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogItem from '../components/BlogItem'
import '../static/css/Blog.css'

import { listPosts } from '../actions/postActions'


function BlogScreen({ }) {

    const dispatch = useDispatch()
    const postList = useSelector(state => state.postList)  // pulling postList of our state
    const { error, loading, posts } = postList

    // Gets loaded every single time or gets triggered the component loads or when the state attributes or one of the state values gets updated
    useEffect(() => {
        // dispatch listPosts action
        dispatch(listPosts())
    }, [dispatch])

    return (
        <div>
            {loading ? <h1>Loading</h1>
                : error ? <h1>{error}</h1>
                    :
                    <div className='cards'>
                        <p className='blog-top'>Last News</p>
                        <div className='cards-container'>
                            <div className='cards-wrapper'>
                                <div className='cards-items'>
                                    {posts.map((post) => (
                                        <BlogItem post={post} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default BlogScreen
