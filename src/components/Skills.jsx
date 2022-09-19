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

const Skills = () => {
    return (
        <div name='skills' className='bg-[#FFFFFE] text-[#2B2C34]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>
                        Experiencia
                    </p>
                    <p className='py-4'>
                        // Estas son las tecnologías con las que he trabajado:
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-black'>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className=''>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className=''>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className=''>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-16 h-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className=''>React</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className=''>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className=''>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-16 h-20 mx-auto' src={AzureSqlDatabase} alt="Azure Sql Database icon" />
                        <p className=''>Sql database</p>
                    </div>
                    <div className='shadow-md shadow-[#D1D1E9] hover:scale-110 duration-100'>
                        <img className='w-16 h-20 mx-auto' src={AzurePortal} alt="Azure Portal icon" />
                        <p className=''>Azure portal</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills