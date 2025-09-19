import React from 'react'
export default function Ubicacion(){
  const defaultEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.1234567890123!2d2.89234567890123!3d42.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab3456789abcdef%3A0x123456789abcdef!2sCastell%20de%20Sant%20Mori!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses";
  return (
    <section>
      <h2 className="text-xl font-bold">Ubicación y Cómo llegar</h2>
      <p className="mt-3 text-gray-700">Dirección: Castell de Sant Mori, Calle Figueras, 2, 17467 Sant Mori, Gerona</p>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">En coche</h4>
          <p className="text-sm text-gray-600 mt-2">Sant Mori está a una hora y media de Barcelona y Esparraguera. Es un pueblo pequeño y hay bastante aparcamiento gratuito en la calle.</p>

          <h4 className="font-semibold mt-4">Transporte público</h4>
           <p className="text-sm text-gray-600 mt-2">Al pueblo no llega el tren y hasta donde sepamos ningún bus. Si venís en AVE, las paradas más cercanas son la de Gerona, a 30 min en coche y la de Figueres, a 25 min en coche. De ahí podéis alquilar un coche, coger un taxi o avisadnos con antelación para ver cuándo iros a recoger.</p>
          
          <h4 className="font-semibold mt-4">Otros</h4>
          <p className="text-sm text-gray-600">En el pueblo no hay ningún supermercado, llevad todo lo que puedas necesitar, especialmente si no venís en coche.</p>
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