import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Menu({ setPage, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: 'inicio', label: 'Inicio' },
    { key: 'ubicacion', label: 'Ubicación' },
    { key: 'faq', label: 'Preguntas Frecuentes' },
    { key: 'rsvp', label: 'Confirmar Asistencia' },
  ];

  return (
    <>
      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Menú lateral */}
      <nav
        className={`fixed top-0 right-0 h-full bg-white shadow-xl rounded-l-2xl transform transition-transform duration-300 z-50
          md:relative md:translate-x-0
          ${isOpen ? 'translate-x-0 w-1/2' : 'translate-x-full w-1/2'}
          md:w-52 md:translate-x-0`}
      >
        <div className="flex flex-col items-start p-6 gap-4 mt-16 md:mt-0">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setPage(item.key);
                setIsOpen(false);
              }}
              className={`text-left w-full p-3 rounded-xl font-medium transition
                ${currentPage === item.key ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Fondo semitransparente */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}