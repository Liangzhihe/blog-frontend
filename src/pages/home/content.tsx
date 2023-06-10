import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { PostItem } from '../../api/interface/post'
import { getPostById } from '../../api/modules/post'
import content from './content.module.css'

const Content = () => {
  const { id } = useParams()

  const [post, setPost] = useState<PostItem>()

  const fetchPost = useCallback(async () => {
    if (!id) return
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
            <div className={content.sup}>发布于：{new Date(post.createdAt).toLocaleString()}</div>
          ) : (
            <div className={content.sup}>编辑于：{new Date(post.updatedAt).toLocaleString()}</div>
          )}
        </div>
      )}
      <div>{post?.content}</div>
    </div>
  )
}

export default Content
