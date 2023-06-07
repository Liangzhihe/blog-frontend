import { useEffect, useState } from 'react'
import { getAllPosts } from '../../api/modules/post'
import { PostItem } from '../../api/interface/post'
import './home.css'

const Home = () => {

  const [posts, setPosts] = useState<PostItem[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const { data } = await getAllPosts()
      if (data) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="home">
      {/* list for post */}
      <div>Home</div>
      <div className='list'>
      {
        posts.length > 0 ? posts.map((post) => {
          return (
            <div className='list-item' key={post.id}>
              <div className='title'>{post.title}</div>
              <div className='sub-title'>
                {new Date(post.updatedAt).toLocaleString()}
              </div>
            </div>
          )
        }): (
          <div>No posts found.</div>
        )
      }
      </div>
    </div>
  )
}

export default Home
