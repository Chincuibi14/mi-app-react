import { useState } from 'react';

function Pacientes({doctor,pacientes}){

    const [busqueda, setBusqueda] = useState('');

  const pacientesFiltrados = pacientes.filter((paciente) => {
  
  return paciente?.nombre.toLowerCase().includes(busqueda.toLowerCase());
});

    return(

    <div className="card__container">
      <h2>Pacientes</h2>
        <input
          type="text"
          placeholder="Ingrese el nombre del paciente"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="form-control mb-3 card__input"
        />
        
      {pacientesFiltrados.map((paciente) => {
  

        return (
          <div key={paciente.id} className="card">
            <div className="card__body">
              <p className="card__text">Nombre: {paciente ? paciente.nombre : 'Desconocido'}</p>
              <p className="card__text">Doctor Asignado: {doctor ? doctor : 'Desconocido'}</p>
            </div>
          </div>
        );
      })}
    </div>

    );
}
export default Pacientes;


