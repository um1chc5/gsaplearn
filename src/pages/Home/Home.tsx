import orionNebula from '@/assets/orion_nebula.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

function Home() {
  const mainScope = useRef(null)
  const imageContainerRef = useRef(null)
  const imageRef = useRef(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useGSAP(
    () => {
      // Create ScrollSmoother and save the instance
      smootherRef.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        content: mainScope.current
      })

      // Animate the image expansion

      gsap.fromTo(
        imageRef.current,
        {
          scale: 1
        },
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: 'top',
            end: 'bottom',
            scrub: true,
            pin: true
          }
        }
      )

      // Animate the banner text
      gsap.fromTo(
        '.banner-text',
        {
          opacity: 0
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: '-0.5',
            end: '50%',
            scrub: true
          }
        }
      )
    },
    { scope: mainScope }
  )

  return (
    <div ref={mainScope}>
      <div ref={imageContainerRef} className='relative h-screen p-8 flex items-center justify-center'>
        <div className='overflow-hidden w-full h-full rounded-2xl relative'>
          <img ref={imageRef} src={orionNebula} alt='orion-nebula' className='w-full h-full object-cover' />
          <div className='banner-text absolute top-1/2 -translate-y-1/2 left-8 text-white text-4xl '>
            <h1 className='text-7xl font-serif font-semibold'>Orion Nebula</h1>
            <p className='text-sm mt-4'>
              The Orion Nebula is a star-forming region in the constellation Orion. <br /> It is one of the most famous
              and beautiful nebulae in the night sky.
            </p>
          </div>
        </div>
      </div>
      <div className='h-screen bg-black/85 text-white p-20'>Section 2: Scroll down to see the effect!</div>
    </div>
  )
}

export default Home
