import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Inicio() {
  const eventDate = new Date("2026-05-02T12:30:00+02:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  const event = {
    title: "Boda de Irene y Pere",
    description:
      "¡Nos casamos! Ven a celebrar con nosotros en el Castell de Sant Mori.",
    location:
      "Castell de Sant Mori, Calle Figueras, 2, 17467 Sant Mori, Gerona",
    startDateGoogle: "20260501T160000Z", // 18:00 CEST -> 16:00 UTC
    endDateGoogle: "20260503T100000Z", // 12:00 CEST -> 10:00 UTC
    startDateOutlook: "2026-05-01T18:00:00+02:00",
    endDateOutlook: "2026-05-03T12:00:00+02:00",
    icsFile: "/evento.ics",
  };

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${event.startDateGoogle}/${event.endDateGoogle}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(
    event.location
  )}&sf=true&output=xml`;

  const outlookCalendarUrl = `https://outlook.office.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
    event.title
  )}&startdt=${event.startDateOutlook}&enddt=${event.endDateOutlook}&body=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;

  const appleCalendarUrl = event.icsFile;

  return (
   <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      {/* Título grande */}
      <h1 className="text-6xl md:text-7xl font-bold mb-6">Pere e Irene</h1>

      {/* Invitación */}
      <p className="text-xl md:text-2xl mb-8 max-w-3xl">
        Tienen el placer de invitarles a su enlace matrimonial que se celebrará
        el <strong>2 de mayo de 2026 a las doce y media</strong> en el
        Castillo de Sant Mori (Gerona)
      </p>


      {/* Galería de imágenes */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          alt="Foto pareja 1"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
          className="rounded-lg shadow-sm object-cover h-48 w-full"
        />
        <img
          alt="Foto pareja 2"
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
          className="rounded-lg shadow-sm object-cover h-48 w-full"
        />
        <img
          alt="Foto paisaje"
          src="https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?q=80&w=800&auto=format&fit=crop"
          className="rounded-lg shadow-sm object-cover h-48 w-full"
        />
      </div>

      
      <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Información de la boda</h2>

      <ul className="list-disc list-inside space-y-3 text-lg">
        <li>
          <strong>Fecha:</strong> La boda tendrá lugar el <strong>2/5/26 a las 12:30</strong>, 
          pero estáis invitados desde el <strong>1/5/26 a las 18</strong> hasta el <strong>3/5/26 a las 12</strong>.
        </li>

        <li>
          <strong>Lugar:</strong> Castillo de Sant Mori, Calle Figueras, 2, 17467 Sant Mori, Gerona.  
          (Hay más información en la pestaña <strong>Ubicación</strong>.)
        </li>

        <li>
          <strong>Formularios a rellenar:</strong> Por favor, rellenad los formularios <strong>Confirmar asistencia</strong> y <strong>Elige tu detalle</strong> antes del <strong>30 de octubre</strong>.
        </li>

        <li>
          <strong>Otra información:</strong> Encontraréis más detalles en el apartado <strong>Preguntas frecuentes</strong>, pero no dudéis en llamarnos si tenéis cualquier duda.
        </li>
      </ul>
    </section>

      {/* Contador con animación */}
      <div className="flex justify-center gap-6 mt-10 text-center font-bold text-3xl md:text-4xl">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit}>
            <motion.span
              key={timeLeft[unit]} 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="block text-6xl"
            >
              {timeLeft[unit]}
            </motion.span>
            {unit === "days"
              ? "días"
              : unit === "hours"
              ? "horas"
              : unit === "minutes"
              ? "min"
              : "seg"}
          </div>
        ))}
      </div>
      
       {/* Botones centrados */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFF176] text-black font-medium px-5 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform text-center"
        >
          Añadir a Google Calendar
        </a>

        <a
          href={outlookCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFF176] text-black font-medium px-5 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform text-center"
        >
          Añadir a Outlook
        </a>

        <a
          href={appleCalendarUrl}
          download
          className="bg-[#FFF176] text-black font-medium px-5 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform text-center"
        >
          Añadir a Apple Calendar
        </a>
      </div>
    </section>
  );
}
