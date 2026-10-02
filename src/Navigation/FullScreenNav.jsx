import React from 'react'

const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className='h-screen text-white py-40 w-full absolute bg-black'>
      <div className='links border-y-2 border-white'>
        <div>
            <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] p-4 uppercase'>Projects</h1>
            <div>
                <div>
                <h2>POUR TOUT VOIR</h2>
                <img src="./public/Fullscreennavimg.jpg" alt="" />
                <h2>POUR TOUT VOIR</h2>
                <img src="./public/Thumbnail.png" alt="" />
                </div>
                <div>
                <h2>POUR TOUT VOIR</h2>
                <img src="./public/Fullscreennavimg.jpg" alt="" />
                <h2>POUR TOUT VOIR</h2>
                <img src="./public/Thumbnail.png" alt="" />
                </div> 
            </div>
        </div>
      </div>

      


    </div>
  )
}

export default FullScreenNav
