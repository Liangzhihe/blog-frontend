import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllPosts } from '../../api/modules/post'
import { PostItem } from '../../api/interface/post'
import './home.css'

const Home = () => {

  const [posts, setPosts] = useState<PostItem[]>([])
  const navigate = useNavigate()

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

  const runterToContent = (id: string) => {
    navigate(`/content/${id}`)
  }

  return (
    <div className="home">
      {/* list for post */}
      {/* <div>Header</div> */}
      <div className='list'>
      {
        posts.length > 0 ? posts.map((post) => {
          return (
            <div className='list-item' key={post.id} onClick={() => runterToContent(post.id)}>
              <div className='title'>{post.title}</div>
              {/* 当创建时间和更新时间相等时，视为未更新过 */}
              { post.createdAt === post.updatedAt ?
                (
                  <div className='sub-title'>
                    发布于：{new Date(post.createdAt).toLocaleString()}
                  </div>
                ) : (
                  <div className='sub-title'>
                    编辑于：{new Date(post.updatedAt).toLocaleString()}
                  </div>
                )
              }
            </div>
          )
        }): (
          <div></div>
        )
      }
      </div>
    </div>
  )
}

export default Home
