import Sidebar from "../componentes/Sidebar/Sidebar";
import ContenidoPaciente from "../componentes/ContenidoPaciente/ContenidoPaciente";

import { useState } from "react";
 import { useLocation } from 'react-router-dom';

function PacienteDashboard({doctores,pacientes,consultas,handleLogout}){

  const [vistaActiva, setVistaActiva] = useState('citas');
  const location= useLocation();
  const pacienteId=location.state?.paciente;

  
  const pacienteSeleccionado=pacientes.find(p=>p.id === Number(pacienteId));

    const campo1= {variante:'primary',onClick: ()=>setVistaActiva('citas'),size:'',type:'',className:'',texto:"Citas"};
    const campo2 ={variante:'primary',onClick: ()=>setVistaActiva('gestionar'),size:'',type:'',className:'',texto:'Gestionar Consulta'};
    const campo3 ={variante:'primary',onClick: ()=>setVistaActiva('historial'),size:'',type:'',className:'',texto:'Historial'};
    const imagen = pacienteSeleccionado
  ? { src: pacienteSeleccionado.imagen, alt: "Imagen de un usuario", className: 'imagen' }
  : { src: "/imagenes/icono.png", alt: "Imagen no encontrada", className: 'imagen' };
    const campos= [campo1,campo2,campo3];
    

    return(
<>
      <div className="container">
        <div className="row  ">
          <div className="col-md-2">
            <Sidebar campos={campos} imagen={imagen} seleccion={pacienteSeleccionado} handleLogout={handleLogout}/>
          </div>
          <div className="col-md-9 offset-md-1" >
            <ContenidoPaciente vistaActiva={vistaActiva} doctores={doctores} pacientes={pacientes} consultas={consultas} pacienteId={pacienteId} />
          </div>
        </div>
      </div>



    </>

    );
}
export default PacienteDashboard;