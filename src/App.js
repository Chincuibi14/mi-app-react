
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';
import Login from './paginas/Login';
import Inicio from './paginas/Inicio';
import MedicoDashboard from './paginas/MedicoDashboard';
import PacienteDashboard from './paginas/PacienteDashboard';
import useLoadData   from './hooks/useLoadData';


function App() {
  const [isPacientLoggedIn, setIsPacientLoggedIn] = useState(false);
  const [isMedicLoggedIn, setIsMedicLoggedIn] = useState(false);
  const { doctores, pacientes, consultas} = useLoadData();

  
  // ESta funcion nos ayudara a setear nuestras variables en false y que cuando queramos accesar a los dashboard tengamos que volver
  // a pasar por el form de incio de sesion. 

  const handleLogout = () => {
  setIsMedicLoggedIn(false);
  setIsPacientLoggedIn(false);
};

// Esta es uan medida de seguridad que cuando una persona logeada va al home, se puedan guardar su informacion y pueda regresar sin tener que volver a inciar
// sesion.

  useEffect(() => {
    const rol = localStorage.getItem('rol');
    const id = localStorage.getItem('id');

    if (rol === 'paciente' && id) {
      setIsPacientLoggedIn(true);
    } else if (rol === 'medico' && id) {
      setIsMedicLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        
      {/*Aqui sucede lo siguiente, cuando queremos accesar por primer vez a algunos de nuestro dashboards, validamos las variables ...LoggedIn
      si estan en false nos llevara al forms correspondiente (si es medico o paciente) para poder iniciar sesion. Dependiendo del dashboard de mandan
      ciertos datos que nos seran de utilidad mientra el backend no este desarrollado.
      */}
        <Routes>

          <Route path="/" element={<Inicio/>} />

          <Route path="/login"  element={<Login onLoginPatient={() => setIsPacientLoggedIn(true)} onLoginMedic={()=>setIsMedicLoggedIn(true)}
                                          onLogoffPatient={() => setIsPacientLoggedIn(false)} onLogoffMedic={()=>setIsMedicLoggedIn(false)}/>} />
          
          <Route path="/medico/dashboard" element={
            isMedicLoggedIn? (
              <MedicoDashboard 
                doctores={doctores}
                pacientes={pacientes}
                consultas={consultas}
                handleLogout={handleLogout}
              
              
              />
            ) : (
              <Navigate to="/login?rol=medico" replace />
            )
          } 
          />

          <Route path="/paciente/dashboard" element={
            isPacientLoggedIn ? (
              <PacienteDashboard
                doctores={doctores}
                pacientes={pacientes}
                consultas={consultas}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login?rol=paciente" replace />
            )
          }
           />


        </Routes>
    
      </main>
      
      <Footer/>
    </div>
    
  );
}

export default App;
