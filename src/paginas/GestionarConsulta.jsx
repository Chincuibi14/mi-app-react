import '../styles/global.css'
import Boton from '../componentes/Button/button';
import { useState } from 'react';

function GestionarConsulta({doctores,pacientes,consultasPaciente}){

    const [busqueda, setBusqueda] = useState('');

    const [citaSeleccionada, setCitaSeleccionada] = useState(null); // ID de la cita seleccionada
    const [nuevoHorario, setNuevoHorario] = useState(''); // Horario elegido
  
  
    const handleCambiarCita = (id) => {
      setCitaSeleccionada(id); // Muestra opciones para esta cita
    };
  
    const handleAceptarCambio = () => {
      alert('Cambio de cita exitoso');
      setCitaSeleccionada(null);
      setNuevoHorario('');
    };
    const handleCancelarCita = () => {
    alert('Cita cancelada exitosamente');

  };

  const consultasFiltradas = consultasPaciente.filter((consulta) => {
  const doctor = doctores.find(d => d.id === consulta.doctorConsultaId);
  return doctor?.nombre.toLowerCase().includes(busqueda.toLowerCase());
});


    return(

    <div className="card__container">
      <h2>Gestionar consultas</h2>

      <input
        type="text"
        placeholder="Ingrese el nombre del doctor"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="form-control mb-3 card__input"
      />
      
      {consultasFiltradas.map((consulta) => {
        const paciente = pacientes.find(p => p.id === consulta.pacienteId);
        const doctor = doctores.find(d => d.id === consulta.doctorConsultaId);
        const horarios = doctor?.horariosDisponibles || [];

        return (
          <div key={consulta.id} className="card">
            <div className='card__body'>

                <h5 className='card__title'>Paciente: {paciente ? paciente.nombre : 'Desconocido'}</h5>
                <p className='card__text'>Doctor: {doctor ? doctor.nombre : 'Desconocido'}</p>
                <p className='card__text'>Fecha:{consulta.fecha}</p>

                <div className='card__boton-group'>
                <Boton 
                variante='success'
                texto='Cambiar cita '
                onClick={()=>handleCambiarCita(consulta.id)}
                
                />

                <Boton
                variante='danger'
                texto='Cancelar cita '
                onClick={()=>handleCancelarCita()}
                />
                </div>  

              {citaSeleccionada === consulta.id && (
                <div className="card__form">
                  <label className="card__label">Selecciona nuevo horario:</label>
                  <select
                    className="card__select"
                    value={nuevoHorario}
                    onChange={(e) => setNuevoHorario(e.target.value)}
                  >
                    <option value="">-- Elegir horario --</option>
                    {horarios.map((horario, i) => (
                      <option key={i} value={horario}>{horario}</option>
                    ))}
                  </select>

                  <Boton
                    variante="primary"
                    texto="Aceptar"
                    onClick={handleAceptarCambio}
                    className="mt-2"
                  />
                </div>
                
              )}  
                
            
            </div>
          </div>
        );
      })}
    </div>

    );

}
export default GestionarConsulta;