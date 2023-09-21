import React from 'react';

interface IncrementarProps {
    incrementarPadre: (value: number) => void;
}

const Incrementar: React.FC<IncrementarProps> = React.memo(({ incrementarPadre }) => {

    console.log("Me estoy redibujando")

    return (
        <button onClick={() => incrementarPadre(100)}>+1</button>
    )
})

export default Incrementar;

