import { ChangeEvent, useState } from "react";

export const Formulario = ({agregarTarea}:any) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}:ChangeEvent<HTMLInputElement>)=>{
        setinputValue(target.value)
    }
    const onSubmit = (event:any) =>{
  /*       const envio = {
            nombre:inputValue,
            visto:false,
        }*/
    
        event.preventDefault(); //permite que no se actualice la pagina al hacer un enter en el formulario 
        agregarTarea(inputValue)
    }
  return (
        <form onSubmit = {(onSubmit)} >
            <input 
                    type="text" 
                    placeholder="Ingresar una nueva tarea..."
                    value={inputValue}
                    onChange={onInputChange}
            />
        </form>
  )
}

export default Formulario;
