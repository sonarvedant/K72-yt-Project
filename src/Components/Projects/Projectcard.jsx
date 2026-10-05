import React from 'react'

const Projectcard = (props) => {
  return (
    <div>
        <div className=' flex gap-3 mb-3 h-[400px]  w-full'>
              <div className='group w-1/2 h-full hover:rounded-[50px]  relative overflow-hidden'>
              <img src={props.image1} className='h-full w-full object-cover' alt='' />

                <div className='opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/20'>
                  <h2 className='uppercase text-3xl font-[font1] border-2 border-white p-2 rounded-full text-white'>
                    voir le projet
                  </h2>
                </div>
              </div>

               <div className='group w-1/2 h-full hover:rounded-[50px] transition-all  relative overflow-hidden'>
              <img src={props.image2} className='h-full w-full object-cover' alt='' />
                <div className='opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/20'>
                  <h2 className='uppercase text-3xl font-[font1] border-2 border-white p-2 rounded-full text-white'>
                    voir le projet
                  </h2>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default Projectcard
