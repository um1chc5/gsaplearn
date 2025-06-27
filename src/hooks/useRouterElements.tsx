import ExpandImageScroll from '@/components/ExpandImageScroll'
// import TextPushUpParallax from '@/components/TextPushUpParallax'
// import { routes } from '@/constants/routes'1
import RootLayout from '@/layouts/Root/RootLayout'
import { useRoutes } from 'react-router-dom'

const useRouterElements = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: (
        <RootLayout>
          <ExpandImageScroll />
        </RootLayout>
      )
    }
    // {
    //   path: routes.expandImageScroll,
    //   element: (
    //     <RootLayout>
    //       <ExpandImageScroll />
    //     </RootLayout>
    //   )
    // },
    // {
    //   path: routes.textPushUpParallaxFade,
    //   element: (
    //     <RootLayout>
    //       <TextPushUpParallax />
    //     </RootLayout>
    //   )
    // }
  ])
  return elements
}

export default useRouterElements
