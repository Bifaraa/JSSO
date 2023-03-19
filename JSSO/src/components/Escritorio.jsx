import React from "react"
import { Cabecera } from "./Cabecera"

export function Escritorio() {
  return (
    <main>
      <section className="bg-neutral-900 w-screen h-[10vh]">
        <Cabecera relojVisible={true} powerVisible={true} />
      </section>
      <section className="bg-neutral-800 w-screen h-[90vh] relative">
        <div className="w-screen ">main</div>
        <div className="bg-slate-900 absolute bottom-0 left-1/2 translate-y-[-50%] translate-x-[-50%] ">
          barra de aplicaciones
        </div>
      </section>
    </main>
  )
}
