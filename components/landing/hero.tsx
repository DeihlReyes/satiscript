import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='pt-[88px] flex flex-row justify-around items-center w-full h-screen gap-16'>
      <div className='flex flex-col justify-center max-w-xl w-full h-fit'>
        <h1 className='text-7xl font-bold mb-7'>Satiscript</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam, cupiditate tenetur autem soluta culpa temporibus sunt dolorum accusantium expedita eligendi maiores laboriosam possimus ullam aliquid? Eius laboriosam temporibus dolorem veritatis dolor sed, tempora impedit ex, molestiae repellendus, accusantium velit rerum eligendi repellat! Qui maiores doloribus, accusamus consectetur repudiandae voluptatibus?</p>
        <Button className='mt-10 w-36 font-bold text-foreground'>TRY IT NOW</Button>
      </div>
      <div className='bg-blue-400 w-96 h-96'></div>
    </div>
  )
}

export default Hero