import { useForm} from '../hooks/useForm';
import { useRef,useEffect } from 'react';

export const FormularioComponent = () => {

    const focusRef = useRef<HTMLInputElement | null>(null);

    console.log(focusRef);

    const InitialForm = {
        userName: '',
        email:'',
        password:''
    }

    const {formState, onInputChange} = useForm(InitialForm);

    const {userName,email,password}  = formState;

    const onSubmit = (event:any) =>{
        event.preventDefault()
        console.log(formState);
    }

    useEffect(() => {
        // Utiliza alguna lógica para determinar si debes enfocar el campo de entrada.
        // Por ejemplo, si deseas enfocar el campo de email al cargar el componente:
        if (focusRef.current) {
          focusRef.current.focus();
        }
      }, []); // Asegúrate de pasar las dependencias correctas o [] si no hay ninguna.
    
    

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-4">
                    <label  className="form-label text-white text-center">Direccion de email</label>
                    <input 
                        
                        type="email" 
                        className="form-control" 
                        name='email'
                        placeholder='Digitar su email por favor...'
                        value={email}
                        onChange={onInputChange}
                        />
                </div>
                <div className="form-group mb-5">
                    <label  className="form-label text-white text-center">Usuario</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='userName'
                        placeholder='Digitar su usuario por favor...'
                        value={userName}
                        onChange={onInputChange}
                        />
                </div>
                <div className="form-group mb-5">
                    <label  className="form-label text-white text-center">Contraseña</label>
                    <input 
                        ref ={focusRef}
                        type="password" 
                        className="form-control" 
                        name='password'
                        placeholder='Digitar su contraseña por favor...'
                        value={password}
                        onChange={onInputChange}
                        />
                </div>
                <button type="submit" className="btn btn-primary ">Enviar</button>
            </form>
        </>
    )
}


export default FormularioComponent;