import Download from '@/components/landing/download'
import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import LandingNavbar from '@/components/landing/navbar'
import Reseachers from '@/components/landing/researchers'
import React from 'react'

const LandingPage = () => {
  return (
    <main>
      <LandingNavbar />
      <section className='z-0 max-w-7xl w-full flex flex-col justify-center items-center mx-auto px-8 h-full'>
        <Hero />
        <Features />
        <Reseachers />
        <Download />
      </section>
    </main>
  )
}

export default LandingPage