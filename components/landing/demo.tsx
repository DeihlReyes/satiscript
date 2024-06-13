import React from 'react'

const Demo = () => {
  return (
    <div id='demo' className="flex flex-col lg:flex-row justify-center items-center w-full h-fit py-16 lg:py-32 gap-20">
      <div className='flex flex-col justify-center max-w-2xl w-full h-fit'>
        <h1 className='text-4xl lg:text-7xl font-bold mb-7'>Demo Video</h1>
        <p className='leading-relaxed'>
          Watch a demo of our system in action. See it helps call center agents to provide better customer service
          through real-time sentiment analysis and script suggestions. 
        </p>
      </div>
      <div className=" w-[640px] h-[380px] relative">
        <iframe src="https://drive.google.com/file/d/1kyQxwRqj-g3Lrme_lptf9FMk8IZb1MaU/preview" width="640" height="380" allow="autoplay" allowFullScreen>
        </iframe>
        <div className="w-80 h-80 absolute opacity-0 right-0 top-0 bg-black"></div>
      </div>
    </div>
  )
}

export default Demo