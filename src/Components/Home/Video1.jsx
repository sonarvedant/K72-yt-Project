import React from 'react'

const Video1 = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover rounded-full' autoPlay loop muted src="/video.mp4"></video>
    </div>
  )
}

export default Video1
