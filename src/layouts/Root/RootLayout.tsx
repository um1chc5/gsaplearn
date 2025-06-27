import { LayoutProps } from '@/types/common.types'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useRef } from 'react'

function RootLayout({ children }: LayoutProps) {
  const mainScope = useRef(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useGSAP(
    () => {
      // Create ScrollSmoother and save the instance
      smootherRef.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        content: mainScope.current
      })
    },
    { scope: mainScope }
  )
  return (
    <div ref={mainScope}>
      <div className=''>{children}</div>
    </div>
  )
}

export default RootLayout
