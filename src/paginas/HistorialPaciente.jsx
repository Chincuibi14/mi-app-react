import { useState } from 'react';

function HistorialPaciente({doctores,pacientes,historialConsultas}){

  const [busqueda, setBusqueda] = useState('');


  const historialFiltrado = historialConsultas.filter((consulta) => {
  const doctor = doctores.find(d => d.id === consulta.doctorConsultaId);
  return doctor?.nombre.toLowerCase().includes(busqueda.toLowerCase());
});
    return(

    <div className="card__container">
      <h2>Historial de consultas</h2>
      <input
        type="text"
        placeholder="Ingrese el nombre del doctor"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="form-control mb-3 card__input"
      />

      {historialFiltrado.map((consulta) => {
        const paciente = pacientes.find(p => p.id === consulta.pacienteId);
        const doctor = doctores.find(d => d.id === consulta.doctorConsultaId);

        return (
          <div key={consulta.id} className="card">
            <div className="card__body">

              <h5 className="card__title">Paciente:{paciente ? paciente.nombre : 'Desconocido'}</h5>
              <p className="card__text">Doctor: {doctor ? doctor.nombre : 'Desconocido'}</p>
              <p className="card__text">Fecha: {consulta.fecha}</p>
              <p className="card__text">Diagnóstico: {consulta.diagnostico || 'Pendiente'}</p>
            
            </div>
          </div>
        );
      })}
    </div>

    );

}
export default HistorialPaciente;