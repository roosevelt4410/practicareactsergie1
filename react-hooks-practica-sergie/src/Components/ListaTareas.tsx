import { useReducer,useEffect } from 'react';
import { useForm } from '../hooks/useForm';

// Estado inicial con una tarea de ejemplo
const initialState = [
  {
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: false,
  },
];

let nextId = 2;

const tareaReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case '[TAREAS] Agregar Tarea':
      return [...state, action.payload];
    case '[TAREAS] Finalizar Tarea':
      return state.map((tarea) =>
        tarea.id === action.payload.id
          ? { ...tarea, finalizada: !tarea.finalizada }
          : tarea
      );
    case '[TAREAS] Eliminar Tarea':
      return state.filter((tarea) => tarea.id !== action.payload.id);
    case '[TAREAS] Borrar Tareas':
      return [];
    default:
      return state;
  }
};

export const ListaTareas = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);
  const { formState, onInputChange } = useForm();

  const agregarTarea = (event:any) => {
    event.preventDefault();

    if(formState.tarea.trim() === "")return;

    const tarea = {
      id: nextId++,
      tarea: formState.tarea,
      finalizada: false,
    };
    const action = {
      type: '[TAREAS] Agregar Tarea',
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = (id:number) => {
    const tarea = {
      id,
    };
    const action = {
      type: '[TAREAS] Finalizar Tarea',
      payload: tarea,
    };
    dispatch(action);
  };

  useEffect(() => {
    
    console.log(state)
  }, [state])
  

  const eliminarTarea =(id:number)=>{
    const tarea = {
        id,
      };
      const action = {
        type: '[TAREAS] Eliminar Tarea',
        payload: tarea,
      };
      dispatch(action);
  }

  const reset = () =>{
    const action = {
        type: '[TAREAS] Borrar Tareas',
        payload: '',
      };

    dispatch(action);
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div>
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingrese nueva tarea..."
            value={formState.tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Adicionar
        </button>
        <button type="button" className="btn btn-warning mt-5" onClick={reset}>
          Eliminar todas
        </button>
      </form>
      <hr />
      <ul className="list-group">
        {state.map((item) => (
          <li className="list-group-item d-flex justify-content-between" key={item.id}>
            <span>{item.tarea} </span>
            <input
              type="checkbox"
              checked={item.finalizada}
              onChange={() => finalizarTarea(item.id)}
            />
            <button className='btn btn-danger' onClick={()=>eliminarTarea(item.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </>
  );
};
