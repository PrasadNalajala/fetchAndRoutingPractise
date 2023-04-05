// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, author, avatarUrl, title, imageUrl, topic} = blogItem
  // console.log(imageUrl)
  return (
    <Link className="link" to={`/blogs/${id}`}>
      <div className="blogItem-container">
        <div className="img-container">
          <img src={imageUrl} className="image" />
        </div>
        <div className="details-conatiner">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} className="profile" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
