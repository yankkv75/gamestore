import { useState, useEffect } from 'react'

import BlogItem from '../components/BlogItem'
import '../static/css/Blog.css'
import axios from 'axios'

function BlogScreen({ }) {

    const [posts, setPosts] = useState([])

    // Gets loaded every single time or gets triggered the component loads or when the state attributes or one of the state values gets updated
    useEffect(() => {
        async function fetchPosts() {
            const { data } = await axios.get('/api/posts/')
            setPosts(data)
        }
        fetchPosts()

    }, [])

    return (
        <div>
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
        </div>
    )
}

export default BlogScreen
