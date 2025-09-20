import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Importa tus imágenes locales
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";

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
    title: "Boda de Pere e Irene",
    description: "¡Nos casamos! Venid a celebrar con nosotros en el Castell de Sant Mori.",
    location: "Castell de Sant Mori, Calle Figueras, 2, 17467 Sant Mori, Gerona",
    startDateGoogle: "20260501T160000Z",
    endDateGoogle: "20260503T100000Z",
    startDateOutlook: "2026-05-01T18:00:00+02:00",
    endDateOutlook: "2026-05-03T12:00:00+02:00",
    icsFile: "/evento.ics", // Coloca el archivo ICS en public/
  };

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${event.startDateGoogle}/${event.endDateGoogle}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;

  const outlookCalendarUrl = `https://outlook.office.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
    event.title
  )}&startdt=${event.startDateOutlook}&enddt=${event.endDateOutlook}&body=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;

  const appleCalendarUrl = event.icsFile;

  return (
    <section className="min-h-screen flex flex-col items-center p-6 text-center font-sans">
      {/* Título grande */}
      <h1 className="text-6xl md:text-7xl font-bold mb-6">Pere e Irene</h1>

      {/* Invitación */}
      <p className="text-xl md:text-2xl mb-8 max-w-3xl">
        Tienen el placer de invitaros a su enlace matrimonial que se celebrará
        el <strong>2 de mayo de 2026 a las 12:30</strong> en el Castillo de Sant Mori (Gerona)
      </p>

      {/* Galería de imágenes locales */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        <img src={foto1} alt="Foto 1" className="rounded-lg shadow-md object-cover h-48 w-full" />
        <img src={foto2} alt="Foto 2" className="rounded-lg shadow-md object-cover h-48 w-full" />
        <img src={foto3} alt="Foto 3" className="rounded-lg shadow-md object-cover h-48 w-full" />
      </div>

      {/* Información de la boda */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-2xl mx-auto mt-8 text-left">
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
            <strong>Formularios a rellenar:</strong> Rellenad los formularios <strong>Confirmar asistencia</strong> y <strong>Elige tu detalle</strong> antes del <strong>30 de octubre</strong>.
          </li>
          <li>
            <strong>Otra información:</strong> Encontraréis más detalles en <strong>Preguntas frecuentes</strong>, pero no dudéis en llamarnos si tenéis dudas.
          </li>
        </ul>
      </div>

      {/* Contador regresivo animado y más pequeño */}
      <div className="flex justify-center gap-4 mt-8 text-center font-bold text-2xl md:text-3xl">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit}>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="block text-4xl md:text-5xl"
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

      {/* Botones de calendario centrados */}
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