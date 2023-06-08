import http from '../index'
import { PostItem, PostList } from '../interface/post'

export const getAllPosts = () => http.get<PostList>('/posts')

export const getPostById = (id: string) => http.get<PostItem>(`/posts/${id}`)