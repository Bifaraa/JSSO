import React from "react"

export function Administrador({ visible }) {
  if (visible) {
    return (
      <div className="p-2 hover:ring-2 hover:rounded-md hover:ring-neutral-700 hover:bg-neutral-800/30 transition ease-in-out delay-200">
        <span className="font-IBM text-xl hover:cursor-pointer tracking-wider text-slate-400">
          Administrador
        </span>
      </div>
    )
  } else <></>
}
