import React from 'react'

import UPB from '../assets/logoUPB.png';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-[#FFFFFE] text-[#2B2C34] p-8 mb-80'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <div className='mt-44'>
          <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>
            Estudios
          </p>
          <p className='py-6 font-medium'>
            <span className='font-bold'>{'{}'}</span> Estos son mis logros académicos:
          </p>
        </div>
        <div className='mt-6'>
          <div className="flex justify-center">
            <div className="flex flex-col items-center md:flex-row md:max-w-xl rounded-lg shadow-lg bg-white hover:scale-110 duration-100 text-[#2B2C34] hover:bg-[#2B2C34] hover:text-[#FFFFFE]">
              <img className="w-36 h-36 p-4 border-none" src={UPB} alt="UPB icon" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-lg font-bold mb-2">2016 - Especialización en Gestión de la Innovación tecnológica</h5>
                <p className="text-base font-medium mb-4">
                  Trabajo de grado: Propuesta para aumentar la eficiencia operativa de un laboratorio clínico a través de herramientas tecnológicas propias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education