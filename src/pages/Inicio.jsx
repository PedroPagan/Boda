import React from 'react'
export default function Inicio(){
  return (
    <section>
      <h2 className="text-xl font-bold">Bienvenidos</h2>
      <p className="mt-3 text-gray-700">Estamos encantados de que consideres acompañarnos en este día tan especial. Aquí encontrarás información sobre la ceremonia, la ubicación, preguntas frecuentes y el formulario RSVP para confirmar tu asistencia.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img alt="Foto pareja 1" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc" className="rounded-lg shadow-sm object-cover h-48 w-full"/>
        <img alt="Foto pareja 2" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=def" className="rounded-lg shadow-sm object-cover h-48 w-full"/>
        <img alt="Foto paisaje" src="https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi" className="rounded-lg shadow-sm object-cover h-48 w-full"/>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold">Descripción</h3>
        <p className="mt-2 text-gray-700">La ceremonia tendrá lugar en una iglesia histórica, seguida de una celebración íntima con familia y amigos. Hemos preparado indicaciones y opciones de alojamiento en la sección "Ubicación".</p>
      </div>
    </section>
  )
}