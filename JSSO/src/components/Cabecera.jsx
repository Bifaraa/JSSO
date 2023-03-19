import React from "react"
import { Power } from "./Power"
import { Reloj } from "./Reloj"

export function Cabecera({ relojVisible, powerVisible }) {
  return (
    <section className="flex w-full justify-between pt-5 px-12">
      <Reloj visible={relojVisible} />
      <div className="hover:cursor-pointer rounded-full shadow-[-.9em_.5em_1em_-.4em_rgba(0,0,0,0.6)]">
        <Power visible={powerVisible} />
      </div>
    </section>
  )
}
