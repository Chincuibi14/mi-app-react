import { useState } from 'react';

function Pacientes({doctor,pacientes}){

//Declaramos los useState que usaremos
  const [busqueda, setBusqueda] = useState('');

  //Esto simula el backend filtrando los datos mandados y devolviendo solo aquellos que coincidan con la busqueda
  const pacientesFiltrados = pacientes.filter((paciente) => {
  
  return paciente?.nombre.toLowerCase().includes(busqueda.toLowerCase());
});

    return(

    <div className="card__container">
      <h2>Pacientes</h2>

      {/* Aqui inicia el buscador */}
        <input
          type="text"
          placeholder="Ingrese el nombre del paciente"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="form-control mb-3 card__input"
        />
        
      {/* Se itera usando maps para poder crear un card para cada consulta y a su vez se obtienen
      los nombre del paciente y del doctor ya que estos vienen como id*/}
      
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


