import { useState } from 'react';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import Ubicacion from './pages/Ubicacion';
import FAQ from './pages/FAQ';
import RSVP from './pages/RSVP';


export default function App() {
const [page, setPage] = useState('inicio');


return (
<div className="min-h-screen flex">
{/* Menú lateral derecho */}
<Menu setPage={setPage} currentPage={page} />


{/* Contenido principal */}
<main className="flex-1 p-6 bg-gray-50">
{page === 'inicio' && <Inicio />}
{page === 'ubicacion' && <Ubicacion />}
{page === 'faq' && <FAQ />}
{page === 'rsvp' && <RSVP />}
</main>
</div>
);
}