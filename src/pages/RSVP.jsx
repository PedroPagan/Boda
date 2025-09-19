import React from "react";

export default function RSVP() {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Confirmar Asistencia
      </h2>
      <p className="mb-6 text-gray-700 text-center md:text-left max-w-2xl">
        Por favor, rellena este formulario para confirmar tu asistencia a la boda.
      </p>

      <div className="w-full md:w-2/3 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://app.formbricks.com/s/cmfqt0h983tk1xs013v49bqts"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}