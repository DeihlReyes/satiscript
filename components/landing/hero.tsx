import React from 'react'
import { Button } from '../ui/button'
import HeroImage from './hero-image'
import Image from 'next/image'
import heroImage from '@/public/assets/landing-nomove.png'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='py-16 lg:pt-40 flex flex-col lg:flex-row justify-evenly items-center w-full h-screen gap-16'>
      <Image className='lg:hidden mt-12 lg:mt-0' src={heroImage} alt='Landing Image' width={600} height={600} />
      <HeroImage />
      <div className='flex flex-col justify-center max-w-xl w-full h-fit'>
        <h1 className='text-4xl lg:text-7xl font-bold mb-7 tracking-wider'>Satiscript</h1>
        <p className='leading-relaxed'>
          A revolutionary system that provides a comprehensive analysis of a call center agent&apos;s
          performance through sentiment analysis and emotion recognition. Satiscript is a tool that
          aims to improve customer service quality by providing real-time emotion detection of a customer
          and provide the agent a script to follow based on the customer&apos;s emotion and words.
        </p>
        <Link href='#download'>
          <Button className='mt-10 w-36 font-bold dark:text-foreground'>TRY IT NOW</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero