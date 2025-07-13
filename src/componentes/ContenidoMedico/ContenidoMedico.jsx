import Citas from "../../paginas/Citas";
import Pacientes from "../../paginas/Pacientes";
import Historial from "../../paginas/Historial";


function ContenidoMedico({vistaActiva,doctores,pacientes,consultas,doctorId}){

    const doctorSeleccionado=doctores.find(doc=>doc.id === Number(doctorId));
    const consultasDoctor=consultas.filter(c =>c.doctorConsultaId === Number(doctorId));
    const pacientesDoctor=pacientes.filter(p=>p.doctorAsignadoId === Number(doctorId));
    const historialConsultas=consultasDoctor.filter(c=>c.estado === "completada");
   

    return(
        <div className="mt-5">
            {vistaActiva === 'citas' && <Citas doctores={doctores} pacientes={pacientes} consultas={consultasDoctor}/>}
            {vistaActiva === 'pacientes' && <Pacientes doctor={doctorSeleccionado.nombre} pacientes={pacientesDoctor}/>}
            {vistaActiva === 'historial' && <Historial doctores={doctores} pacientes={pacientes} historialConsultas={historialConsultas} />}
        </div>

    );

}
export default ContenidoMedico;