import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import LandingNavbar from '@/components/landing/navbar'
import Reseachers from '@/components/landing/researchers'
import React from 'react'

const LandingPage = () => {
  return (
    <main>
      <LandingNavbar />
      <section className='max-w-7xl w-full flex flex-col justify-center items-center mx-auto'>
        <Hero />
        <Features />
        <Reseachers />
      </section>
    </main>
  )
}

export default LandingPage