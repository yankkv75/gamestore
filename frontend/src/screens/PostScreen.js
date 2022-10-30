import { useState, useEffect } from 'react'

import '../static/css/Post.css'
import axios from 'axios'


function PostScreen({ match }) {

    const [post, setPost] = useState([])

    useEffect(() => {
        async function fetchPost() {
            const { data } = await axios.get(`/api/post/${match.params.id}`)
            setPost(data)
        }
        fetchPost()
    }, [])

    return (
        <div>
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
        </div>
    )
}

export default PostScreen