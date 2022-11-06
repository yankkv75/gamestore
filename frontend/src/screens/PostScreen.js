import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../static/css/Post.css'

import { listPostDetails } from '../actions/postActions'


function PostScreen({ match }) {

    const dispatch = useDispatch()
    const postDetails = useSelector(state => state.postDetails)
    const { loading, error, post } = postDetails

    useEffect(() => {
        dispatch(listPostDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            {loading ? <h1>Loading</h1>
                : error ? <h1>{error}</h1>
                    : (
                        <div className='post-container'>
                            <div className='post-image'>
                                <img className='post-img' src={post.image} alt={post.name} />
                            </div>
                            <div className='post-text'>
                                <h3>{post.title}</h3>
                                <p>{post.text}</p>
                                <p className='post-time'>{post.time}</p>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default PostScreen