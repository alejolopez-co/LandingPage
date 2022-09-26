import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import DEV from '../assets/developer.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-auto bg-[#FFFFFE]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='mt-44'>
            <h1 className='text-4xl font-bold text-[#2B2C34]'>
              ¡Hola! soy
            </h1>
            <h2 className='text-4xl font-bold text-[#6246EA] mt-2'>
              Alejandro López,
            </h2>
            <p className='text-2xl text-[#2B2C34] mt-2'>
              Líder de equipos de desarrollo de software
            </p>
          </div>
          <div className='sm:mt-44'>
            <img className='w-auto border-none rounded-3xl' src={DEV} alt="DEV jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home