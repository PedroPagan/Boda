import React, { useState, useEffect } from "react";

export default function Inicio() {
  const eventDate = new Date("2026-05-01T18:00:00+02:00");

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
      "¡Nos casamos! Ven a celebrar con nosotros en el Castell de Sant Mòri.",
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
    <section className="p-6">
      <h2 className="text-xl font-bold">Bienvenidos</h2>
      <p className="mt-3 text-gray-700">
        Estamos encantados de que consideres acompañarnos en este día tan
        especial. Aquí encontrarás información sobre la ceremonia, la ubicación,
        preguntas frecuentes y el formulario RSVP para confirmar tu asistencia.
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

      {/* Descripción */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold">Descripción</h3>
        <p className="mt-2 text-gray-700">
          La ceremonia tendrá lugar en una iglesia histórica, seguida de una
          celebración íntima con familia y amigos. Hemos preparado indicaciones
          y opciones de alojamiento en la sección "Ubicación".
        </p>
      </div>

      {/* Contador regresivo */}
      <div className="flex gap-4 mt-6 text-center text-gray-800 font-semibold text-xl md:text-2xl">
        <div>
          <span className="block text-4xl md:text-5xl">{timeLeft.days}</span>
          días
        </div>
        <div>
          <span className="block text-4xl md:text-5xl">{timeLeft.hours}</span>
          horas
        </div>
        <div>
          <span className="block text-4xl md:text-5xl">{timeLeft.minutes}</span>
          min
        </div>
        <div>
          <span className="block text-4xl md:text-5xl">{timeLeft.seconds}</span>
          seg
        </div>
      </div>

      {/* Botones de Calendario */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:opacity-90 transition text-center"
        >
          Añadir a Google Calendar
        </a>

        <a
          href={outlookCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
        >
          Añadir a Outlook
        </a>

        <a
          href={appleCalendarUrl}
          download
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition text-center"
        >
          Añadir a Apple Calendar
        </a>
      </div>
    </section>
  );
}
