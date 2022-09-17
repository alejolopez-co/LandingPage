import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#FFFFFE]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#2B2C34]'>
          ¡Hola! soy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#6246EA] mt-2'>
          Alejandro López,
        </h2>
        <p className='text-2xl sm:text-5xl text-[#2B2C34] mt-2'>
          Líder de equipos de desarrollo de software
        </p>
      </div>
    </div>
  )
}

export default Home