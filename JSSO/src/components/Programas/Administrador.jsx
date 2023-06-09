import React from 'react'
import { Memoria } from './componentes-Administrador/Memoria'

export function Administrador({ visible, exit }) {
  /* TODO: es el encargado de hacer las peticiones y pasar los parametros
  a los componentes, como a memoria o procesos (cantidad de ram disponible etc) */

  const handleClic = () => {
    exit(false)
  }
  return visible ? (
    <>
      <section className='bg-neutral-700/90 w-full h-full flex flex-col border-2'>
        <section className='w-full border-b-2 hover:cursor-pointer'>
          <div
            onClick={handleClic}
            className='flex flex-row-reverse p-3 text-red-800 bg-black/50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              className='bi bi-x-circle-fill text-orange-500'
              viewBox='0 0 16 16'
            >
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z' />
            </svg>
          </div>
        </section>
        <div className='flex h-full mt-10 justify-around'>
          <nav className='self-center font-IBM  text-2xl text-white ml-12  border-2 border-sky-500 rounded-lg p-8 mb-28 shadow-lg shadow-neutral-900'>
            <div className='hover:cursor-pointer'>
              <a>Memoria</a>
            </div>
            <hr className='mt-3 mb-3' />
            <div>
              <a className='hover:cursor-pointer'>Procesos</a>
            </div>
          </nav>
          <div className='w-[70%] h-[75%] p-6 border-2 border-sky-500 rounded-lg shadow-lg shadow-neutral-900 bg-black/50'>
            <Memoria
              memoriaTotal={100}
              memoriaUsada={200}
              discoTotal={500}
              discoUsado={200}
              swapTotal={20}
              swapUsada={2}
            />
          </div>
        </div>
      </section>
    </>
  ) : (
    <>{console.log('no renderiza', visible)}</>
  )
}
