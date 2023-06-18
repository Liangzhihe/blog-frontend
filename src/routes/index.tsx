import { useRoutes } from 'react-router-dom'
import { RouteObject } from 'react-router'
import Home from '@/pages/home/home'
import Content from '@/pages/home/content'
import About from '@/pages/about/about'

const rootRouter:RouteObject[] = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/content/:id',
    element: <Content/>,
  },
  {
    path: '/about',
    element: <About/>,
  }
]

const Router = () => {
  return useRoutes(rootRouter)
}

export default Router