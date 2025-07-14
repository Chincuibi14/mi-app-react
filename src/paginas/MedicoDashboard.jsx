import Sidebar from "../componentes/Sidebar/Sidebar";
import ContenidoMedico from "../componentes/ContenidoMedico/ContenidoMedico";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


function MedicoDashboard({doctores,pacientes,consultas,handleLogout}){

  const location= useLocation();
  const doctorId=location.state?.doctor || localStorage.getItem('id');
  
  const doctorSeleccionado=doctores.find(doc=>doc.id === Number(doctorId));
  


    const [vistaActiva, setVistaActiva] = useState('citas');

    const campo1= {variante:'primary',onClick: ()=>setVistaActiva('citas'),size:'',type:'',className:'',texto:"Citas"};
    const campo2 ={variante:'primary',onClick: ()=>setVistaActiva('pacientes'),size:'',type:'',className:'',texto:'Pacientes'};
    const campo3 ={variante:'primary',onClick: ()=>setVistaActiva('historial'),size:'',type:'',className:'',texto:'Historial'};
    const imagen = doctorSeleccionado
    ? { src: doctorSeleccionado.imagen, alt: "Imagen de un medico", className: 'imagen' }
    : { src: "/imagenes/icono.png", alt: "Imagen no encontrada", className: 'imagen' };
    const campos= [campo1,campo2,campo3];
    

    return(
<>
      <div className="container">
        <div className="row  ">
          <div className="col-md-2">
            <Sidebar campos={campos} imagen={imagen} seleccion={doctorSeleccionado} handleLogout={handleLogout} />
          </div>
          <div className="col-md-9 offset-md-1" >
            <ContenidoMedico vistaActiva={vistaActiva} doctores={doctores} pacientes={pacientes} consultas={consultas} doctorId={doctorId}/>
          </div>
        </div>
      </div>

</>
    );
}
export default MedicoDashboard;