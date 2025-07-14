
import { useNavigate, useLocation } from 'react-router-dom';
import Formulario from "../componentes/Form/form";

function Login({onLoginPatient,onLoginMedic,onLogoffMedic,onLogoffPatient}){

    const navigate = useNavigate(); 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const rol = queryParams.get('rol');

    // Datos de los inputs
    const inputUsuario = { id: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre' };
    const inputContraseña = { id: 'password', label: 'Contraseña', type: 'password', placeholder: 'Ingresa tu contraseña' };

// Array de inputs
    const camposFormulario = [inputUsuario, inputContraseña];

    const handleLogin =(formData) => {

        const idPaciente = formData.nombre?.trim() || 101; 
        const idDoctor = formData.nombre?.trim() || 201; 
        // Para verificar que tenga el campo `nombre`

        if(rol==='paciente'){

            onLoginPatient();
            localStorage.setItem("rol", "paciente");
            localStorage.setItem("id", idPaciente);
            onLogoffMedic();

            navigate('/paciente/dashboard',{ state: { paciente: idPaciente} });

        }
        else if (rol==='medico'){
            onLoginMedic();
            onLogoffPatient();
            localStorage.setItem("rol", "medico");
            localStorage.setItem("id", idDoctor);
           navigate('/medico/dashboard', { state: { doctor: idDoctor } }); 
        }
        else{   
            navigate('/'); 
        }

    };

    return(
        <div>
            <Formulario campos={camposFormulario} handleLogin={handleLogin}/>
            
        </div>
    );
}
export default Login;