import CitasPaciente from "../../paginas/CitasPaciente";
import GestionarConsulta from "../../paginas/GestionarConsulta";
import HistorialPaciente from "../../paginas/HistorialPaciente";


function ContenidoPaciente({vistaActiva,doctores,pacientes,consultas,pacienteId}){

    const consultasPaciente=consultas.filter(c=>c.pacienteId===Number(pacienteId)&&c.estado!=="completada");
    const historialPaciente=consultas.filter(c=>c.pacienteId===Number(pacienteId)&&c.estado==="completada");

    return(
        <div className="mt-5">
            {vistaActiva === 'citas' && <CitasPaciente doctores={doctores} pacientes={pacientes} consultasPaciente={consultasPaciente}/>}
            {vistaActiva === 'gestionar' && <GestionarConsulta doctores={doctores} pacientes={pacientes} consultasPaciente={consultasPaciente}/>}
            {vistaActiva === 'historial' && <HistorialPaciente doctores={doctores} pacientes={pacientes} historialConsultas={historialPaciente}/>}
        </div>

    );

}
export default ContenidoPaciente;