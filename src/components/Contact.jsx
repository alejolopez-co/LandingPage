import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-auto bg-[#FFFFFE] text-[#2B2C34] flex justify-center items-center p-8 mt-10'>
            <form method='POST' action="https://getform.io/f/c5eb9bcd-f7ae-40cd-b32e-571b0eb9e6e1" className='flex flex-col max-w-[600px] w-full h-full'>
                <div className='mt-36'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>
                        Contacto
                    </p>
                    <p className='py-6 font-medium'>
                        <span className='font-bold'>{"{}"}</span>
                        {" "}Contácteme a través de este formulario o envíame un correo a{" "} 
                        <span className='font-bold'>alejolopez.co@gmail.com</span>
                    </p>
                </div>
                <input name='name' className='bg-[#2B2C34] text-white p-2 required:border-red-500' type="text" placeholder='Nombre *' required />
                <input name='email' className='my-4 p-2 bg-[#2B2C34] text-white required:border-red-500' type="email" placeholder='Email *' required />
                <textarea name="message" className='bg-[#2B2C34] text-white p-2 required:border-red-500' rows="10" placeholder='Mensaje' required></textarea>
                <button className='font-medium text-[#2B2C34] border-[#2B2C34] border-2 hover:bg-[#6246EA] hover:border-[#6246EA] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
            </form>
        </div>
    )
}

export default Contact