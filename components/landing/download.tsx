import React from 'react'
import { Button } from '../ui/button'
import { DownloadIcon } from 'lucide-react'
import Image from 'next/image'
import chatbot from '@/public/assets/chatbot.png'

const Download = () => {
  return (
    <div id='download' className="flex flex-col lg:flex-row justify-center items-center w-full h-fit py-16 lg:py-32 gap-20">
      <div className='flex flex-col justify-center max-w-2xl w-full h-fit'>
        <h1 className='text-4xl lg:text-7xl font-bold mb-7'>Download now!</h1>
        <p className='leading-relaxed'>
          Download the app and start improving your customer service quality by providing real-time emotion 
          detection of a customer and provide the agent a script to follow based on the customer&apos;s emotion and words.
        </p>
        <Button className='flex justify-center items-center mt-10 w-36 font-bold dark:text-foreground'>
          Download
          <DownloadIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <Image src={chatbot} width={350} height={350} alt='chatbot' />
    </div>
  )
}

export default Download