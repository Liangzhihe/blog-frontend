import http from '../index'
import { PostList } from '../interface/post'

export const getAllPosts = () => http.get<PostList>('/posts')