import { useState } from "react";
import Formulario from "./Formulario";

interface Tema {
    id:number,
    nombre: string;
    visto: boolean;
  }
  
  const Item = ({nombre,visto}:Tema) =>{
      return(
          <li className="text-white mt-5">{nombre} {visto?'✅':'❌'}</li>
      )
  }
  export const Map = () => {

    let listadoSecciones:Tema[] = [
      {id:1,nombre: 'Instalaciones Necesarias', visto:true},
      {id:2,nombre:"Uso de Vite", visto:true},
      {id:3,nombre:"Componentes", visto:true},
      {id:4,nombre:"Variables JSX", visto:true},
      {id:5,nombre:"Props", visto:true},
      {id:6,nombre:"Eventos", visto:true},
      {id:7,nombre:"UseState", visto:true},
      {id:8,nombre:"Redux", visto:false},
      {id:9,nombre:"CustomHooks", visto:false},
    ]
    const [arreglo, setArreglo] =useState(listadoSecciones);
    
    const addTask =() =>{
      const nuevoId = arreglo.length + 1; // Calcula el nuevo id
      setArreglo([...arreglo, {id:nuevoId, nombre:'nuevo', visto:false}]);
    }

    const onAgregarTarea = (val: string) => {
      let valor = val.trim();
      if(valor.length < 1){
        return;
      }
      const nuevoId = arreglo.length + 1; // Calcula el nuevo id
      const envio = {
        id:nuevoId,
        nombre:val,
        visto:false,
      }
      setArreglo([...arreglo,envio])
    }


    return (
      <>
        <h1 className="text-bold text-3xl text-center text-orange-600">Listado de temas del curso</h1>
        <ol>
            {arreglo.map(item =><Item key={item.id} id={item.id} nombre={item.nombre} visto={item.visto} ></Item>)}
        </ol>

        {/* <Formulario agregarTarea = {setArreglo}/> */}    

        <Formulario agregarTarea = {onAgregarTarea} />

        <button className="bg-orange-600 text-white mt-10" onClick={()=>addTask()}>
          Agregar
        </button>
      </>
    )
  }
  export default Map;
  