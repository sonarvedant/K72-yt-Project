import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBottomText from '../Components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
            <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
