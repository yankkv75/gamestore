import BlogItem from '../components/BlogItem'
import '../static/css/Blog.css'
import posts from '../posts'


function BlogScreen({ }) {
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
