import Home from '@/pages/Home'
import { useRoutes } from 'react-router-dom'

const useRouterElements = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    }
  ])
  return elements
}

export default useRouterElements
