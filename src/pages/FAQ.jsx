import React from 'react'
export default function FAQ(){
  const qas = [
    {q: '¿Hay código de vestimenta?', a: 'Uniforme informal-elegante. Trae calzado cómodo para el baile.'},
    {q: '¿Puedo llevar a niños?', a: 'La celebración es para mayores; por favor confirma si traes algún menor en el formulario RSVP.'},
    {q: '¿Hay opciones vegetarianas?', a: 'Sí, tendremos menú con opción vegetariana. Indícalo en el RSVP.'},
    {q: '¿Necesito imprimir la invitación?', a: 'No es necesario, pero trae tu DNI por si acaso.'}
  ];

  return (
    <section>
      <h2 className="text-xl font-bold">Preguntas frecuentes</h2>
      <div className="mt-4 space-y-3">
        {qas.map((qa, i) => (
          <details key={i} className="bg-gray-50 p-3 rounded">
            <summary className="font-medium cursor-pointer">{qa.q}</summary>
            <div className="mt-2 text-gray-700">{qa.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}