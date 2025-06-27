import orionNebula from '@/assets/orion_nebula.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

import TextPushUpParallax from './TextPushUpParallax'

export default function ExpandImageScroll() {
  const imageContainerRef = useRef(null)
  const imageRef = useRef(null)
  const imageInnerContainerRef = useRef(null)

  useGSAP(() => {
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

    gsap.fromTo(
      imageContainerRef.current,
      {
        padding: '40px'
      },
      {
        padding: '0px',
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: '-28',
          end: '50%',
          scrub: true
        }
      }
    )

    gsap.fromTo(
      imageInnerContainerRef.current,
      {
        borderRadius: 16
      },
      {
        borderRadius: 0,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: imageInnerContainerRef.current,
          start: '-28',
          end: '50%',
          scrub: true
        }
      }
    )
  })

  return (
    <div>
      <div ref={imageContainerRef} className='relative h-screen p-8 flex items-center justify-center'>
        <div ref={imageInnerContainerRef} className='overflow-hidden w-full h-full relative rounded-2xl'>
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
      {/* <div className='h-screen bg-black/85 text-white p-20'>Section 2: Scroll down to see the effect!</div> */}
      <TextPushUpParallax />
    </div>
  )
}
