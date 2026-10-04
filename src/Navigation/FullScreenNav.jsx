import gsap from 'gsap'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useRef } from 'react'
import { NavbarContext } from '../context/Navcontext.jsx'

const FullScreenNav = () => {
    const fullScreenRef = useRef(null)
    const { navOpen, setNavOpen } = useContext(NavbarContext)
    useEffect(() => {
        const panel = fullScreenRef.current
        if (!panel) return

        gsap.killTweensOf(panel)

        if (navOpen) {
            gsap.set(panel, { display: 'block', y: '-100%' })
            gsap.to(panel, { y: '0%', duration: 0.5, ease: 'power2.out' })
        } else {
            gsap.to(panel, {
                y: '-100%',
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => gsap.set(panel, { display: 'none' }),
            })
        }

        return () => gsap.killTweensOf(panel)
    }, [navOpen])

  return (

    <div ref={fullScreenRef} id='fullscreennavmain' className='fixed inset-0 z-100 hidden h-screen w-screen bg-black'>
        <div className='relative h-full w-full bg-black'>
        <div className='relative z-10 flex items-center justify-between bg-black'>
            <div className='w-30 m-[2vw]'>
                <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                      <path fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
                
            </div>
            <button type='button' id='closebtn' aria-label='Close navigation' onClick={() => setNavOpen(false)} className='m-[2vw] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"className="w-15 h-15 text-black">
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                </svg>
            </button>
        </div>

        <div>
            <div id='fullscreennav' className='absolute inset-0 h-screen w-screen bg-black py-25 text-white'>
                <div className='link border-y-2 relative mt-25 border-white overflow-hidden'>
                    <Link to='/projects' onClick={() => setNavOpen(false)}>
                    <h1 className='font-[font2] text-[8vw] z-5 text-center leading-[0.8] p-3 uppercase'>
                    Projects
                    </h1>
                <div className='movelink flex text-black z-6 bg-[#D3fD50] absolute top-0 w-max'>
                    <div className='flex items-center moveX shrink-0'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT VOIR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/Fullscreennavimg.jpg" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT VOIR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/Thumbnail.png" alt="" />
                    </div>
                    <div className='flex items-center moveX shrink-0'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT VOIR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/Fullscreennavimg.jpg" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT VOIR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/Thumbnail.png" alt="" />
                    </div>

                </div>
                    </Link>
      </div>

      <div className='link border-y-2 relative border-white overflow-hidden'>
            <Link to='/agence' onClick={() => setNavOpen(false)}> 
            <h1 className='font-[font2] text-[8vw] z-5 text-center leading-[0.8] p-4 uppercase'>
                Agence
            </h1>
                <div className='movelink flex text-black z-6 bg-[#D3fD50] absolute top-0 w-max'>
                    <div className='flex items-center moveX shrink-0'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT SAVIOR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/blank_copied.jpg" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT SAVIOR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/PLP.jpg" alt="" />
                    </div>
                    <div className='flex items-center moveX shrink-0'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT SAVIOR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/blank_copied.jpg" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>POUR TOUT SAVIOR</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/PLP.jpg" alt="" />
                    </div>

                </div>
                </Link>
      </div>

      <div className='link border-y-2 relative border-white overflow-hidden'>
            <Link to='https://share.google/D0A4QP7DaM9m8Xk3r'  onClick={() => setNavOpen(false)}>
            <h1 className='font-[font2] text-[8vw] z-5 text-center leading-[0.8] p-4 uppercase'>
                Blogue
            </h1>
                <div className='movelink flex text-black z-6 bg-[#D3fD50] absolute top-0 w-max'>
                 
                    <div className='flex items-center moveX shrink-0'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>Lier Less Articles</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/ed.png" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>Lier Less Articles</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/Thumbnail.png" alt="" />
                    </div>

                    <div className='flex items-center moveX shrink-0'>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>Lier Less Articles</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/ed.png" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>Lier Less Articles</h2>
                    <img className='w-[14vw] rounded-full h-[7.7vw] object-cover' src="./public/Thumbnail.png" alt="" />
                    </div>

                </div>
            </Link>
      </div>
    
    </div>
        </div>
    </div>
    </div>
  )
}

export default FullScreenNav