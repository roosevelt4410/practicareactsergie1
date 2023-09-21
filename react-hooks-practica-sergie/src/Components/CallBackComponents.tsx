import { useState, useCallback } from 'react';
import Incrementar from './Incrementar';

export const CallBackComponents = () => {

    const [contador, setContador] = useState(0);

    const incrementarPadre = useCallback((value:number)=>{
        setContador(counter =>counter + value);
    },[])

    return (
        <>
            <h1>Contador : {contador}</h1>
            <Incrementar incrementarPadre={incrementarPadre} />
        </>
    )
}