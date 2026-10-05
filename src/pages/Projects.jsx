import React from 'react'
import Projectcard from '../Components/Projects/Projectcard'

const projects = [
  { image1: '/sc.jpg', image2: '/ab.jpg' },
  { image1: '/ck.jpg', image2: '/nt.jpg' },
  { image1: '/Thumbnail.png', image2: '/Fullscreennavimg.jpg' },
]
const Projects = () => {
  return (
    <div className='h-full w-full relative bg-white'>
      <div className='h-full'>
        <div className='p-2'>
        <div className=' pt-[40vh] p-'>
        <h2 className='font-[font2] text-[9vw] -mb-8 text-black uppercase'>
          Projects
        </h2>
        </div>
        <div>
          {projects.map(function(project, index){
            return <Projectcard key={index} image1={project.image1} image2={project.image2}/>
          })}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
