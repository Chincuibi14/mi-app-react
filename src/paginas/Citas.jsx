import Boton from "../componentes/Button/button";
import { useState } from 'react';

function Citas({doctores,pacientes,consultas}){


  //Declaramos los useState que usaremos, una para gestionar la citas otro para los horarios y uno ultimo para el buscador

  const [citaSeleccionada, setCitaSeleccionada] = useState(null); // ID de la cita seleccionada
  const [nuevoHorario, setNuevoHorario] = useState(''); // Horario elegido
  const [busqueda, setBusqueda] = useState('');


  // Nos ayudara a setear el valor de citaSeleccionada con un ID
  const handleCambiarCita = (id) => {
    setCitaSeleccionada(id); // Muestra opciones para esta cita
  };

  //Ejecuta un cuadro de dialogo haciendo alusion a que cambio la cita y a su vez setea la variable citaSeleccionada y NuevoHorario
  const handleAceptarCambio = () => {
    alert('Cambio de cita exitoso');
    setCitaSeleccionada(null);
    setNuevoHorario('');
  };

  //Ejecuta un cuadro de dialogo haciendo alusion a la cancelacion de la cita
  const handleCancelarCita = () => {
    alert('Cita cancelada exitosamente');

  };
  //Esto simula el backend filtrando los datos mandados y veolviendo solo aquellos que coincidan con la busqueda
  const consultasFiltradas = consultas.filter((consulta) => {
  const paciente = pacientes.find(p => p.id === consulta.pacienteId);
  return paciente?.nombre.toLowerCase().includes(busqueda.toLowerCase());
});


  return (
    <div className="card__container">

      <h2>Citas</h2>
      
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
                 <p className='card__text'>Diagnostico:{consulta.diagnostico || 'Pendiente'}</p>

                <div className='card__boton-group'>
                <Boton
                variante='success'
                texto='Cambiar cita '
                onClick={() => handleCambiarCita(consulta.id)}
                
                />

                <Boton
                variante='danger'
                texto='Cancelar cita '
                onClick={()=> handleCancelarCita()}
                />
                </div>  

                {/* En caso de haber clickeado el boton de cambiar cita la variable citaSeleccionada se seteara con el
                id de la cita, haciendo que este recuadro aparezca en pantalla */}

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
export default Citas;
