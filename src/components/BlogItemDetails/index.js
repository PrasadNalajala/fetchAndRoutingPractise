// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blog: {}, isLoading: true}

  componentDidMount() {
    this.fetchBlog()
    console.log('triggered')
  }

  fetchBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(response.statuscode)
    const blogDetails = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      title: data.title,
      imageUrl: data.image_url,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blog: blogDetails, isLoading: false})
  }

  renderBlog = () => {
    const {blog} = this.state
    const {author, avatarUrl, title, imageUrl, content} = blog
    return (
      <div className="blog-container">
        <h1 className="blog-title">{title}</h1>
        <div className="profile-container">
          <img src={avatarUrl} alt="profile" className="profile" />
          <p className="topic">{author}</p>
        </div>
        <div>
          <img src={imageUrl} alt={title} className="full-image" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log('trigger')
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlog()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
