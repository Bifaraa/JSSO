import React from "react"
import { Administrador } from "./Administrador"
import { Menu } from "./Menu"
import { Power } from "./Power"
import { Reloj } from "./Reloj"

export function Cabecera({
  relojVisible,
  powerVisible,
  menuVisible,
  administradorVisible,
}) {
  const classNamePower = `flex w-1/3 justify-${
    menuVisible && administradorVisible ? "between" : "end"
  }`

  return (
    <section className="flex w-full justify-between pt-5 px-12">
      <Reloj visible={relojVisible} />
      <div className={classNamePower}>
        <Menu visible={menuVisible} />
        <Administrador visible={administradorVisible} />
        <div className="hover:cursor-pointer rounded-full shadow-[-.9em_.5em_1em_-.4em_rgba(0,0,0,0.6)]">
          <Power visible={powerVisible} />
        </div>
      </div>
    </section>
  )
}
