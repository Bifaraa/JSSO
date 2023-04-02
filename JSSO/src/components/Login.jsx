import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cabecera } from './barras-cabeceras/Cabecera'

export function Login() {
  /* TODO: hacer que si se mete la contraseña incorrecta
  muestre error, subrayando el recuadro de rojo y diga contraseña incorrecta y funicone el boton de power */

  /* Estados para luego comprar el valor  del usuario y la contraseña con la peticion */
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  /* Referencia para apuntar al valor de los inputs */
  const usuarioInput = useRef()
  const constraseñaInput = useRef()

  const navigate = useNavigate()

  /* TODO: hacer validar que no venga vacio el json y usar try cath para manejo de error y sacar a un arcihovo
  dentro de services */

  const getUser = () => {
    fetch('../../public/data/users.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((miJson) => {
        setUsuario(miJson.usuario)
        setContraseña(miJson.contraseña)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  /* Al poderse logger redirecciona para el componente del escritorio */

  const handleClick = () => {
    const userInput = usuarioInput.current.value
    const passInput = constraseñaInput.current.value
    if (usuario === userInput && contraseña === passInput) {
      navigate('/escritorio')
    } else {
      alert('usuario y contraseña malos')
    }
  }

  return (
    <main className='w-screen h-screen bg-gradient-to-r bg-neutral-800 '>
      <Cabecera relojVisible={true} powerVisible={true} />
      <section className='flex flex-col justify-center items-center'>
        <div className='flex flex-col rounded-full w-[8em] p-5 items-center mb-6 shadow-[-.9em_.5em_1em_-.4em_rgba(0,0,0,0.6)] '>
          <img
            src='../../public/icons8-user-64.png'
            className='w-[100px] h-[auto] '
          />
        </div>
        <form className='flex flex-col gap-4  '>
          <div className='bg-neutral-900 p-12 rounded-lg shadow-[-.9em_.5em_1em_-.4em_rgba(0,0,0,0.6)]'>
            <div className='flex w-full justify-around mb-12'>
              <label className='w-1/4 text-white text-lg' htmlFor='usuario'>
                Usuario
              </label>
              <input
                ref={usuarioInput}
                className='w-1/2 rounded-lg'
                id='text'
                type='email'
                name='usuario'
                placeholder='Usuario'
                required={true}
              />
            </div>

            <div className='mb-2 flex w-full justify-around'>
              <label className='w-1/4 text-white text-lg' htmlFor='contraseña'>
                Contraseña
              </label>
              <input
                ref={constraseñaInput}
                className='w-1/2 rounded-lg'
                id='password1'
                type='password'
                required={true}
                name='contraseña'
                placeholder='*********'
              />
            </div>
          </div>
          <button
            onClick={handleClick}
            className='bg-lime-500 w-[16em] h-[4em] mt-4 self-center rounded-lg shadow-[-.9em_.5em_1em_-.4em_rgba(0,0,0,0.6)]'
            type='submit'
          >
            <span className='text-xl'>Ingresar</span>
          </button>
        </form>
      </section>
    </main>
  )
}
