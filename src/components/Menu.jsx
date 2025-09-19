export default function Menu({ setPage, currentPage }) {
  const menuItems = [
    { key: 'inicio', label: 'Inicio' },
    { key: 'ubicacion', label: 'Ubicación' },
    { key: 'faq', label: 'Preguntas Frecuentes' },
    { key: 'rsvp', label: 'Confirmar Asistencia' },
  ];

  return (
    <nav className="w-52 bg-white shadow-md flex flex-col items-start p-4 gap-2 border-l">
      {menuItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setPage(item.key)}
          className={`text-left w-full p-2 rounded-xl transition ${
            currentPage === item.key
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}