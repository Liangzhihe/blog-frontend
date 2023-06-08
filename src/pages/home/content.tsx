import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { PostItem } from '../../api/interface/post'
import { getPostById } from '../../api/modules/post'

const Content = () => {
  const { id } = useParams()

  const [post, setPost] = useState<PostItem>()

  const fetchPost = useCallback( async () => {
    if (!id) return
    const res = await getPostById(id)
    setPost(res.data)
  },[id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost, id])



  return (
    <div className="content">
      {/* list for post */}
      <div>{ post?.content }</div>
    </div>
  )
}

export default Content
