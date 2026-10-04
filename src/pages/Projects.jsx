import React from 'react'

const Projects = () => {
  return (
    <div className='h-full w-full relative bg-white'>
      <div className='h-[100vw]'>
        <div className='p-2'>
        <div className=' pt-[40vh] p-'>
        <h2 className='font-[font2] text-[9vw] -mb-8 text-black uppercase'>
          Projects
        </h2>
        </div>
        {/* //imgdiv */}
        <div>
            <div className=' flex gap-3 mb-3 h-[500px]  w-full'>
              <div className='w-1/2 h-full hover:rounded-4xl overflow-hidden'>
              <img src="Fullscreennavimg.jpg" alt="" className='h-full w-full object-cover'/>
              </div>
              <div className='w-1/2 h-full hover:rounded-4xl overflow-hidden'>
              <img src="Fullscreennavimg.jpg" alt="" className='h-full w-full object-cover'/>
              </div>
            </div>
            
           
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
