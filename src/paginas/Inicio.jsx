import Carrusel from "../componentes/Carrusel/Carrusel";

function Inicio(){

    return(
  
        <div>
            {/* Aqui se usa el componente Casrrusel el cual recibe tres imagenes como entrada*/}

            <h1 className="text-center mt-4">Bienvenido a la App Médica</h1>
            <Carrusel
            
            path1="/imagenes/img1.png"
            path2="/imagenes/img2.jpg"
            path3="/imagenes/img3.jpg"

            
            />
        </div>




    );

}
export default Inicio;