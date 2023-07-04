import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import formatDate from '@/utils/formatDate'
import { PostItem } from '@/api/interface/post'
import { getPostById } from '@/api/modules/post'
import content from './content.module.css'

const Content = () => {
  const { id } = useParams()

  const [post, setPost] = useState<PostItem>()

  // loading status
  // const [loading, setLoading] = useState(false)

  const fetchPost = useCallback(async () => {
    if (!id) {
      // show error message in the page
      console.log('id is null')
      return
    }
    const res = await getPostById(id)
    setPost(res.data)
  }, [id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost, id])

  return (
    <div className={content.content}>
      {/* content for post */}
      <div className={content.header}>{post?.title}</div>
      {post && (
        <div>
          {post.createdAt === post.updatedAt ? (
            <div className={content.date}>发布于：{formatDate(new Date(post.createdAt))}</div>
          ) : (
            <div className={content.date}>
              <div>发布于：{formatDate(new Date(post.createdAt))}</div>
              <div>编辑于：{formatDate(new Date(post.updatedAt))}</div>
            </div>
          )}

          <ReactMarkdown
            components={{ img(props) { return <img {...props} style={{ maxWidth: '100%' }}></img> } }}
          >{post.content}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

export default Content
