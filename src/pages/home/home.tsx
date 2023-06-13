import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import formatDate from '../../utils/formatDate'
import { getAllPosts } from '../../api/modules/post'
import { PostItem } from '../../api/interface/post'
import homeStyle from './home.module.css'

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
        // 按发布时间倒序排列
        data.posts.sort((a: PostItem, b: PostItem) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        })
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
    <div className={homeStyle.home}>
      {/* list for post */}
      {/* <div>Header</div> */}
      <div className={homeStyle.list}>
      {
        posts.length > 0 ? posts.map((post) => {
          return (
            <div className={homeStyle['list-item']} key={post.id} onClick={() => runterToContent(post.id)}>
              <div className={homeStyle.title}>{post.title}</div>
              <div className={homeStyle['sub-title']}>
                {formatDate(new Date(post.createdAt), false)}
              </div>
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
