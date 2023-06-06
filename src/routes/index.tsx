import { useRoutes } from 'react-router-dom'
import { RouteObject } from 'react-router'
import Home from '../pages/home/home'
import Content from '../pages/home/content'

const rootRouter:RouteObject[] = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/content',
    element: <Content/>,
  }
]

const Router = () => {
  return useRoutes(rootRouter)
}

export default Router