function Pacientes({doctor,pacientes}){

    return(

    <div className="card__container">
      <h2>Pacientes</h2>
      {pacientes.map((paciente) => {
  

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


