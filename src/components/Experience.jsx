import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.svg';
import GitHub from '../assets/githubWhite.png';
import Java from '../assets/java.png';
import AzureSqlDatabase from '../assets/azureSqlDatabase.svg';
import AzurePortal from '../assets/azure.png';
import MySQL from '../assets/mysql.png';

const Experience = () => {
    return (
        <div name='experience' className='w-full h-auto bg-[#FFFFFE] text-[#2B2C34] sm:px-8 mt-96 mb-80'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
                <div className='mt-44'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>
                        Experiencia
                    </p>
                    <p className='py-6 font-medium'>
                        <span className='font-bold'>{'{}'}</span> Estas son las tecnologías con las que he trabajado:
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-black'>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='font-medium'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='font-medium'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='font-medium'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-16 h-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='font-medium'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='font-medium'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='font-medium'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-16 h-20 mx-auto' src={AzureSqlDatabase} alt="Azure Sql Database icon" />
                        <p className='font-medium'>Sql database</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-16 h-20 mx-auto' src={AzurePortal} alt="Azure Portal icon" />
                        <p className='font-medium'>Azure portal</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience