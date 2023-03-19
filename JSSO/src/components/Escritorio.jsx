import React from "react"
import { BarraApp } from "./BarraApp"
import { Cabecera } from "./Cabecera"

export function Escritorio() {
  return (
    <main>
      <section className="bg-neutral-900 w-screen h-[12vh]">
        <Cabecera
          relojVisible={true}
          powerVisible={true}
          administradorVisible={true}
          menuVisible={true}
        />
      </section>
      <section className="bg-[url('../../public/fondos/lion-2305938_1920.jpg')] bg-center object-cover w-screen h-[88vh] relative">
        <div className="w-screen ">main</div>
        <div className="bg-slate-600/80 rounded-lg absolute bottom-0 left-1/2 translate-y-[-50%] translate-x-[-50%] p-5 shadow-[-.9em_.5em_1em_-.4em_rgba(0,0,0,0.6)]">
          <BarraApp />
        </div>
      </section>
    </main>
  )
}
