// Write your JS code here
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blog: {}}

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
    console.log(response.statuscode)
    const blogDetails = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      title: data.title,
      imageUrl: data.image_url,
      topic: data.topic,
      content: data.content,
    }

    const renderBlog = () => {
      this.setState({blog: blogDetails})
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
  }

  render() {
    console.log('triggered')
    return <h1>hii</h1>
  }
}

export default BlogItemDetails
