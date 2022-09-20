import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#FFFFFE] text-[#2B2C34] p-8 mb-80'>
            <div className='flex flex-col px-8 justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right sm:pb-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>
                            Perfil
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold'>
                        <p>
                            Diseño de aplicaciones
                        </p>
                    </div>
                    <div className='font-medium'>
                        <p>
                            Diseño de diagramas para el desarrollo de software
                        </p>
                        <p className='mt-2'>
                            Diseño de arquitecturas de software
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
