import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useRouterElements from './hooks/useRouterElements'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

function App() {
  const elements = useRouterElements()
  return <>{elements}</>
}

export default App
