export interface PostItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}


export interface PostList {
  posts: PostItem[];
  count: number;
}