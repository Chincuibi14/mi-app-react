
import { useNavigate, useLocation } from 'react-router-dom';
import Formulario from "../componentes/Form/form";

function Login({onLoginPatient,onLoginMedic,onLogoffMedic,onLogoffPatient}){

    // Esto nos ayudara a poder movernos entre las paginas

    const navigate = useNavigate(); 
    
    //Esta parte nos ayudara a poder recibir datos desde el URL sin que el usuario vea esos datos. 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const rol = queryParams.get('rol');

    // Datos de los inputs
    const inputUsuario = { id: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre' };
    const inputContraseña = { id: 'password', label: 'Contraseña', type: 'password', placeholder: 'Ingresa tu contraseña' };

// Array de inputs
    const camposFormulario = [inputUsuario, inputContraseña];

    //Esta es la funcion que controla el Login, recibe como parametro los datos del form.
    const handleLogin =(formData) => {
         
        //Aqui vemos si el form incluye datos y sino automaticamente va un id general, esto para 
        // fines de demostracion y se pueda iniciar sin usuario asignado

        const idPaciente = formData.nombre?.trim() || 101; 
        const idDoctor = formData.nombre?.trim() || 201; 

        // Verifica el campo rol que se nos mando por el url (sin que el usuario lo vea por seguridad) y dependiendo
        // el resultado lo dirige al dashboard del medico o del paciente. Asimismo se hace uso del localStorage
        // para poder guardar los datos de incio y que el usuario pueda navegar al home o a otra pagina sin tener que cerrar su sesion.

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

    // Aqui se usa el componente que se creo de Forms y se mandan los campos (con sus respectivos)
    // datos y la funcion de handleLogin. 
    
    return(
        <div>
            <Formulario campos={camposFormulario} handleLogin={handleLogin}/>
            
        </div>
    );
}
export default Login;