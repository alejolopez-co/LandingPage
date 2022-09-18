import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/myLogo.png'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2B2C34] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '120px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Inicio</li>
                <li>Perfil</li>
                <li>Estudios</li>
                <li>Experiencia</li>
                <li>Portafolio</li>
                <li>Contacto</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2B2C34] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Inicio</li>
                <li className='py-6 text-4xl'>Perfil</li>
                <li className='py-6 text-4xl'>Estudios</li>
                <li className='py-6 text-4xl'>Experiencia</li>
                <li className='py-6 text-4xl'>Portafolio</li>
                <li className='py-6 text-4xl'>Contacto</li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0099D0]'>
                        <a className='flex justify-between items-center w-full text-[#FFFFFE]' href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D1D1E9]'>
                        <a className='flex justify-between items-center w-full text-[#2B2C34]' href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3A717F]'>
                        <a className='flex justify-between items-center w-full text-[#FFFFFE]' href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2B2C34]'>
                        <a className='flex justify-between items-center w-full text-[#FFFFFE]' href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default NavBar