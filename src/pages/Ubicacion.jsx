import React from 'react'
export default function Ubicacion(){
  const defaultEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.601691028191!2d-3.708021984595293!3d40.41536307936361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288c0a1f3d7f%3A0x6a0a2a1d6f8c9e6!2sPlaza%20Mayor!5e0!3m2!1ses!2ses!4v1694990000000";
  return (
    <section>
      <h2 className="text-xl font-bold">Ubicación & Cómo llegar</h2>
      <p className="mt-3 text-gray-700">Dirección: Plaza Mayor, Madrid (ejemplo). Reemplaza la dirección por la real antes de publicar.</p>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">En coche</h4>
          <p className="text-sm text-gray-600 mt-2">Hay zonas de aparcamiento público a 5-10 minutos a pie. Te recomendamos compartir coche cuando sea posible.</p>

          <h4 className="font-semibold mt-4">Transporte público</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            <li>Metro: Línea 1 — Estación 'Sol' (10 min a pie)</li>
            <li>Autobús: Paradas cercanas: 3, 17, 25</li>
            <li>Tren: Estación Atocha (15 min en taxi)</li>
          </ul>

          <h4 className="font-semibold mt-4">Alojamiento cercano</h4>
          <p className="text-sm text-gray-600">Consulta alojamientos en el centro histórico — hay opciones para todos los presupuestos.</p>
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
          <p className="text-xs text-gray-500 mt-2">Nota: el mapa es un embed público de Google Maps. Para mostrar tu ubicación exacta, reemplaza el parámetro `pb` por el embed de Google Maps de la dirección real.</p>
        </div>
      </div>
    </section>
  )
}