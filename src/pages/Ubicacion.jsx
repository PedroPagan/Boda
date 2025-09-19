import React from 'react'
export default function Ubicacion(){
  const defaultEmbed = "https://www.google.com/maps/place/Castell+de+Sant+Mori/@42.1552128,2.9906274,16.87z/data=!4m6!3m5!1s0x12baf3a691a475f7:0x2fe99a5ba5bf4017!8m2!3d42.1539607!4d2.9908134!16s%2Fg%2F1hc0hky_7?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D";
  return (
    <section>
      <h2 className="text-xl font-bold">Ubicación y Cómo llegar</h2>
      <p className="mt-3 text-gray-700">Dirección: Castell de Sant Mori, Calle Figueras, 2, 17467 Sant Mori, Gerona</p>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">En coche</h4>
          <p className="text-sm text-gray-600 mt-2">Sant Mori está a una hora y media de Barcelona y Esparraguera. Es un pueblo pequeño y hay bastante aparcamiento gratuito en la calle.</p>

          <h4 className="font-semibold mt-4">Transporte público</h4>
           <p className="text-sm text-gray-600 mt-2">Al pueblo no llega el tren y hasta donde sepamos ningún bus. Si venís en AVE, las paradas más cercanas son la de Gerona, a 30 min en coche y la de Figueres, a 25 min en coche. De ahí podéis alquilar un coche, coger un taxi o avisarnos con antelación para ver cuándo iros a recoger.</p>
          
          <h4 className="font-semibold mt-4">Otros</h4>
          <p className="text-sm text-gray-600">En el pueblo no hay ningún supermercado, lleva todo lo que puedas necesitar, especialmente si no vienes en coche.</p>
        </div>

        <div>
          <div className="rounded overflow-hidden shadow">
            <iframe
              title="Mapa de la ubicación"
              src={defaultEmbed}
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}