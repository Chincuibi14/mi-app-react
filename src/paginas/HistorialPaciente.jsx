function HistorialPaciente({doctores,pacientes,historialConsultas}){
    return(

    <div className="card__container">
      <h2>Historial de consultas</h2>
      {historialConsultas.map((consulta) => {
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