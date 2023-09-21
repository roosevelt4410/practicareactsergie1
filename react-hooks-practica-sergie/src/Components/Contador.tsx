import './App.css';
import { useCounter } from '../hooks/useCounter';

export const Contador = () => {

    const { contador,incrementar,decrementar,resetear } = useCounter(0);

    return (
        <div>
            <h1 className='titulo'>Contador: {contador}</h1>

            <button className='btn btn-primary' onClick={()=>incrementar(1)}>
                Incrementar
            </button>
            <button className='btn btn-secondary' onClick={()=>resetear(0)}>
                Resetear
            </button>
            <button className='btn btn-warning' onClick={()=>decrementar(1)}>
                Decrementar
            </button>
        </div>
    );
};

export default Contador;

