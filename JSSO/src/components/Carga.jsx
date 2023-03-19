import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "./Logo"
import { Progress } from "flowbite-react"

export function Carga() {
  const [barCarga, setBarCarga] = useState(0)
  const navitage = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setBarCarga((prevPorcentaje) => {
        if (prevPorcentaje === 100) {
          clearInterval(interval)
          navitage("/login")
          return 100
        } else {
          const numAleatorioIncremento = Math.floor(Math.random() * 10) + 1
          return Math.min(prevPorcentaje + numAleatorioIncremento, 100)
        }
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-screen h-screen flex flex-col justify-around items-center bg-neutral-800">
      <Logo />
      <div className="w-1/2">
        <Progress progress={barCarga} color="yellow" size="lg" />
      </div>
    </section>
  )
}
