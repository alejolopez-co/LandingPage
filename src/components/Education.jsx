import React from 'react'

import UPB from '../assets/logoUPB.png';
import UNINCCA from '../assets/logoUNINCCA.png';

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

        {/* Grid */}
        {/*'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-black'*/}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 py-8'>

          {/* Grid item */}
          <div className="grid justify-items-center md:max-w-xl rounded-lg shadow-lg bg-white hover:scale-110 duration-100 text-[#2B2C34] hover:bg-[#2B2C34] hover:text-[#FFFFFE]">
            <div className='h-36'>
              <img className="h-36 p-4 border-none" src={UPB} alt="UPB icon" />
            </div>
            <div className="p-6 h-auto">
              <div className='h-28'>
                <h5 className="text-lg font-bold mb-2 p-2">2016 - Especialización en Gestión de la Innovación tecnológica</h5>
              </div>
              <div className='h-28'>
                <p className="text-base text-justify font-medium mb-4">
                  Trabajo de grado: Propuesta para aumentar la eficiencia operativa de un laboratorio clínico a través de herramientas tecnológicas propias
                </p>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div className="grid justify-items-center md:max-w-xl rounded-lg shadow-lg bg-white hover:scale-110 duration-100 text-[#2B2C34] hover:bg-[#2B2C34] hover:text-[#FFFFFE]">
            <div className='h-36'>
              <img className="h-36 p-4 border-none" src={UNINCCA} alt="UNINCCA icon" />
            </div>
            <div className="p-6 h-auto">
              <div className='h-28'>
                <h5 className="text-lg font-bold mb-2 p-2">2006 - Ingeniería de sistemas</h5>
              </div>
              <div className='h-28'>
                <p className="text-base text-justify font-medium mb-4">

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