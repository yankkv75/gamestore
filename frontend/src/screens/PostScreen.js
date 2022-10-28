import '../static/css/Post.css'
import posts from '../posts'


function PostScreen({ match }) {

    const post = posts.find((p) => p._id === match.params.id)
    return (
        <div>
            <div className='post-container'>
                <div className='post-image'>
                    <img className='post-img' src={post.image} alt='post-image' />
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