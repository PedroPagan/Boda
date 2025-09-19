import React from 'react'
export default function FAQ(){
  const qas = [
    {q: '¿Qué tengo que llevar?', a: 'La casa tiene piscina, por lo que llevad bañador, chanclas y toalla de piscina. A parte puede que refresque o llueva.'},
    {q: '¿Tengo que llevar ropa de cama/toallas de ducha?', a: 'No, las habitaciones son habitaciones de hotel, con ropa de cama y toallas.'},
    {q: '¿Cómo me visto?', a: 'No hay un codigo de vestimenta especifico, si podeis venir con camisa mejor, pero como esteis cómodos.'},
    {q: '¿Puedo llevar a mi mascota?', a: 'No, el castillo no admite mascotas :(.'},
    {q: '¿Puedo saltarme la ceremonia e ir sólo a comer el pastel?', a: 'Deberías.'},
    {q: '¿Es necesario conjuntar la pajarita con los calcetines?', a: 'Es casi imprescindible excepto si llevas pajarita de madera, en cuyo caso puedes llevar zuecos.'},
    {q: '¿Puedo ir vestido de blanco?', a: 'Solo los hombres pueden llevar traje blanco, en cuyo caso debe ir acompañado de cadenas de oro de 250 gr mínimo.'}
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