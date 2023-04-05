// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

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
    const {author, avatarUrl, title, imageUrl, topic, content} = blog
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={avatarUrl} alt="avatar" />
          <p>{author}</p>
        </div>
        <div>
          <img src={imageUrl} alt="imagedetail" />s<p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
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
