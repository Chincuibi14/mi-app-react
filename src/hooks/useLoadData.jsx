import { useEffect, useState } from "react";
 

function useLoadData() {

    //Aqui creamos nuestros objetos vacios para que con un UseState puedan ser actualizados. 
  const [data, setData] = useState({
    doctores: [],
    pacientes: [],
    consultas: [],
    loading: true,
    error: null,
  });

  
  useEffect(() => {

    //Aqui iniciamos con una funcion sincrona para recibir los datos con fetch
    const load = async () => {
      try {

        //Usamos promise.all para hacer varias peticiones al mismo tiempo
        const [doctoresRes, pacientesRes, consultasRes] = await Promise.all([
          fetch("/SimulacionDatos/doctores.json"),
          fetch("/SimulacionDatos/pacientes.json"),
          fetch("/SimulacionDatos/consultas.json")
        ]);
        
        //Convertimos los datos recibidos en estilo json
        const [doctores, pacientes, consultas] = await Promise.all([
          doctoresRes.json(),
          pacientesRes.json(),
          consultasRes.json()
        ]);

        //seteamos los datos
        setData({
          doctores,
          pacientes,
          consultas,
          loading: false,
          error: null,
        });

        } catch (error) {
        setData((prev) => ({
          ...prev,
          loading: false,
          error: "Error cargando los datos",
        }));
      }
    };

    load();
  }, []);

  return data;
}

export default useLoadData;