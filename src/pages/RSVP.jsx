import React, { useState } from 'react'
export default function RSVPForm({ onSubmit }){
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [correo, setCorreo] = useState('')
  const [asistencia, setAsistencia] = useState('Sí')
  const [invitados, setInvitados] = useState(0)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    setError('')
    if(!nombre || !apellidos) { setError('Por favor indica nombre y apellidos.'); return }
    if(!correo || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) { setError('Introduce un correo válido.'); return }
    const entry = { nombre, apellidos, correo, asistencia, invitados, mensaje, fecha: new Date().toISOString() }
    onSubmit(entry)
    setNombre(''); setApellidos(''); setCorreo(''); setAsistencia('Sí'); setInvitados(0); setMensaje('')
  }

  return (
    <section>
      <h2 className="text-xl font-bold">Confirmar asistencia (RSVP)</h2>
      <p className="mt-2 text-gray-600">Por favor completa el formulario para confirmar tu asistencia.</p>

      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
        <div>
          <label className="text-sm font-medium">Nombre</label>
          <input value={nombre} onChange={e=>setNombre(e.target.value)} className="mt-1 block w-full rounded p-2 border" />
        </div>
        <div>
          <label className="text-sm font-medium">Apellidos</label>
          <input value={apellidos} onChange={e=>setApellidos(e.target.value)} className="mt-1 block w-full rounded p-2 border" />
        </div>

        <div>
          <label className="text-sm font-medium">Correo electrónico</label>
          <input value={correo} onChange={e=>setCorreo(e.target.value)} className="mt-1 block w-full rounded p-2 border" />
        </div>

        <div>
          <label className="text-sm font-medium">Asistirás?</label>
          <select value={asistencia} onChange={e=>setAsistencia(e.target.value)} className="mt-1 block w-full rounded p-2 border">
            <option>Sí</option>
            <option>No</option>
            <option>Tal vez</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Número de invitados</label>
          <input type="number" min={0} value={invitados} onChange={e=>setInvitados(Number(e.target.value))} className="mt-1 block w-full rounded p-2 border" />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium">Mensaje (opcional)</label>
          <textarea value={mensaje} onChange={e=>setMensaje(e.target.value)} className="mt-1 block w-full rounded p-2 border" rows={4} />
        </div>

        {error && <div className="md:col-span-2 text-sm text-red-600">{error}</div>}

        <div className="md:col-span-2 text-right">
          <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white font-medium">Enviar RSVP</button>
        </div>
      </form>
    </section>
  )
}