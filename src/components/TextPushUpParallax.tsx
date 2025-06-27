import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

// import { SplitText } from 'gsap/SplitText'

export default function TextPushUpParallax() {
  useGSAP(() => {
    const heroTextTl = gsap.timeline()
    const splitHeroText = new SplitText('.hero-text', {
      type: 'words, chars'
    })

    heroTextTl.from(splitHeroText.chars, {
      duration: 0.3,
      opacity: 0,
      y: 5,
      ease: 'power2.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: '.first-page',
        start: 'top 50%',
        end: 'bottom 100%',
        scrub: true,
        markers: true
      }
    })

    const secondPageTl = gsap.timeline()
    const splitSecondPageText = new SplitText('.second-page-text', {
      type: 'words, chars'
    })

    secondPageTl.from(splitSecondPageText.chars, {
      opacity: 0,
      y: 10,
      ease: 'circ.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: '.second-page',
        start: 'top 30%',
        end: 'bottom 100%',
        scrub: true
      }
    })
  })

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center font-handwriting first-page'>
        <div className='hero-text text-lg p-6 text-justify bg-amber-50 rounded shadow-xl w-1/3 space-y-2 '>
          <p className='text-3xl font-bold title'>Dear Future Me</p>
          <p>I hope this message finds you in good health and high spirits.</p>
          <p>
            Right now, you’re in the middle of building something — learning, struggling, and growing. I know some days
            feel heavy, and progress may seem slow, but you’re doing better than you think. Every small improvement you
            make compounds into something greater. Don’t rush it. Trust the process.
          </p>
          <p>
            Remember the late nights debugging, the countless console logs, and the moments when one small animation
            finally worked — and it made you smile. Those moments matter. They’re proof that you’re moving forward.
          </p>
          <p>
            I’m writing this letter as a way to remind you of your dedication and creativity. Whatever you're working on
            right now, keep giving it your best. Whether it's for yourself, your team, or the people who will use what
            you build — it matters.
          </p>
          <p>
            Stay curious. Keep your fire. And don’t forget to take breaks and breathe. <br /> You're on the right track.
          </p>
          <p>
            With pride and belief in you, <br />
            <strong>Your Past Self</strong>
          </p>
        </div>
      </div>
      <div className='h-screen second-page flex items-center justify-center font-handwriting'>
        <div className='second-page-text'>
          <p className='text-4xl font-bold title'>
            "Success is not final, failure is not fatal:
            <br />
            it is the courage to continue that counts."
          </p>
          <p className='description'>Winston Churchill</p>
        </div>
      </div>
    </>
  )
}
