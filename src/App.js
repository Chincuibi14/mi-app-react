
import './App.css';
import { useState } from 'react';
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

  const handleLogout = () => {
  setIsMedicLoggedIn(false);
  setIsPacientLoggedIn(false);
};

  return (
    <div>
      <Header />
      
      <main className="container my-4">
        

        <Routes>

          <Route path="/" element={<Inicio/>} />
          <Route path="/login"  element={<Login onLoginPatient={() => setIsPacientLoggedIn(true)} onLoginMedic={()=>setIsMedicLoggedIn(true)} />} />
          
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

          <Route path="/paciente/expediente/:id" element={<h1>Expediente Paciente</h1>} />
          <Route path="/paciente/agendar" element={<h1>Agendar Consulta</h1>} />
        </Routes>
    
      </main>
      
      <Footer/>
    </div>
    
  );
}

export default App;
