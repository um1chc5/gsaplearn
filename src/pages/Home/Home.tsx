import { routes } from '@/constants/routes'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

function Home() {
  const mainScope = useRef(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useGSAP(
    () => {
      // Create ScrollSmoother and save the instance
      smootherRef.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        content: mainScope.current
      })
    },
    { scope: mainScope }
  )

  return (
    <div className='p-8 flex items-center h-full'>
      <div>
        <h1 className='text-4xl font-bold'>Navigation</h1>
        <div className='flex gap-4 mt-4'>
          <Link className='hover:underline' to={routes.expandImageScroll}>
            Expand Image Scroll
          </Link>
          <Link className='hover:underline' to={routes.textPushUpParallaxFade}>
            Text Push Up Parallax Fade
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
