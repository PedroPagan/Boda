import React from 'react'
export default function Header(){
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">A & J</div>
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold">Boda de Ana & Javier</h1>
        <p className="text-sm text-gray-500">Te invitamos a celebrar con nosotros</p>
      </div>
    </div>
  )
}