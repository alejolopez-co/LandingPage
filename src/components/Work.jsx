import React from 'react';
import WorkImg from '../assets/kanbanDashboard.png';
import WorkImg2 from '../assets/app-todolist.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#FFFFFE] text-[#2B2C34] p-8'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <div className='mt-36'>
          <p className='text-4xl font-bold inline border-b-4 border-[#6246EA]'>Portafolio</p>
          <p className='py-6 font-medium'>
            <span className='font-bold'>{'{}'}</span> Mira algunos de mis trabajos recientes:
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#D1D1E9] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tablero kanban
              </span>
              <div className='pt-8'>
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/alejolopez-co/M3U2TrelloAppAlejandroLopez">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#D1D1E9] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                To-DO List
              </span>
              <div className='pt-8'>
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/alejolopez-co/todo-list">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#D1D1E9] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tablero kanban
              </span>
              <div className='pt-8'>
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/alejolopez-co/M3U2TrelloAppAlejandroLopez">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#D1D1E9] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                To-DO List
              </span>
              <div className='pt-8'>
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/alejolopez-co/todo-list">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#D1D1E9] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tablero kanban
              </span>
              <div className='pt-8'>
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/alejolopez-co/M3U2TrelloAppAlejandroLopez">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#D1D1E9] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                To-DO List
              </span>
              <div className='pt-8'>
                <a href="/">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/alejolopez-co/todo-list">
                  <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repositorio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work