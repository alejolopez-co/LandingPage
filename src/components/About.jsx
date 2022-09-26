import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full mx-auto h-auto bg-[#FFFFFE] text-[#2B2C34] py-8 mt-96 mb-80'>
            {/* Container */}
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right sm:pb-4 mt-44'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>
                        Perfil
                    </p>
                </div>
                <div className='flex items-end sm:mx-4'>
                    <p className='font-medium'>
                        <span className='font-bold'>{'{}'}</span> Estas son algunas de mis competencias:
                    </p>
                </div>
                <div className='sm:text-right text-lg font-bold'>
                    <p>
                        Diseño de aplicaciones
                    </p>
                </div>
                <div className='font-medium'>
                    {/* List */}
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Diseño de diagramas para el desarrollo de software
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Diseño de arquitecturas de software
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='sm:text-right text-lg font-bold'>
                    <p>
                        Habilidades
                    </p>
                </div>
                <div className='font-medium'>
                    {/* List */}
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Comunicación asertiva, trabajo en equipo
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Experto en sistemas de Ayudas Diagnósticas e integración con dispositivos biomédicos
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Vigilancia tecnológica y selección de tecnologías
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='sm:text-right text-lg font-bold'>
                    <p>
                        Conocimientos de nube
                    </p>
                </div>
                <div className='font-medium'>
                    {/* List */}
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Fundamentos y experiencia en el monitoreo y costos de BD en Azure
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Monitoreo Dynatrace, solución de incidentes
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='sm:text-right text-lg font-bold'>
                    <p>
                        Programación
                    </p>
                </div>
                <div className='font-medium'>
                    {/* List */}
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Javascript, HTML5, CSS, React
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Conocimientos en Java, Spring Boot, PHP, PowerBuilder
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='sm:text-right text-lg font-bold'>
                    <p>
                        Conocimientos en BD
                    </p>
                </div>
                <div className='font-medium'>
                    {/* List */}
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Experto en implementación de BD SQL Server
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="font-light leading-tight">
                                Tuning de BD SQL Server
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
