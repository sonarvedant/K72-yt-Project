import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(".loaderh3", {
      x: 40,
      opacity: 0,
      stagger: 0.2,
    })

    tl.to(".loaderh3", {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.1,
    })

    tl.to("#loader", {
      opacity: 0,
      display: "none",
    })
  })

  return (
    <div>
  <div id="loader" className="fixed inset-0 z-10 flex items-center justify-center gap-2.5 bg-black  text-white uppercase text-[5vw]">
        <h3 className='loaderh3'>Building</h3>
        <h3 className='loaderh3'>your</h3>
        <h3 className='loaderh3'>experience."</h3>
    </div>
      
    </div>
  )
}

export default loader
