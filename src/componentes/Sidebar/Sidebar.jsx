import Boton from "../Button/button";
import { Stack } from "react-bootstrap";
import Imagen from "../Imagenes/Imagenes";
import { useNavigate } from 'react-router-dom';

import './Sidebar.css'


function Sidebar({campos,imagen,seleccion,handleLogout}){

      const navigate = useNavigate();

    const cerrarSesion = () => {
        handleLogout(); // pone en false los estados
        localStorage.removeItem('rol');
        localStorage.removeItem('id');
        navigate('/'); // redirige al inicio
  };

    return(
        <div className="mt-5 text-center">
            <h5>{seleccion ? seleccion.nombre : 'No encontrado'}</h5>
            <Stack  gap={2}>

                <Imagen
                className={imagen.className}
                src={imagen.src}
                alt={imagen.alt}
                
                
                />
            {
                
                campos.map((campo,index)=>(


                    
                    <Boton 
                        key={index}
                        variante={campo.variante}
                        onClick={campo.onClick}
                        size={campo.size}
                        type={campo.type}
                        className={campo.className}
                        texto={campo.texto}

                    /> 

                ))
            }
            <Boton
            variante="danger"
            texto="Cerrar sesion"
            onClick={cerrarSesion}
            
            
            />
            </Stack>

        </div>
    );
}

export default Sidebar;