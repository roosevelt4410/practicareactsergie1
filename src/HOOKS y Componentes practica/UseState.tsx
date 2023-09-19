import { useState } from 'react';

function Contador() {

  const [contador, setContador] = useState(0);

  const handleIncrement = (contador:number)=>{
    setContador(contador+1)
  }

  return (
    <>
    <div>
      <h1 className="text-5xl font-bold underline text-center">
        Contador 
      </h1>
      <h2 className='text-3xl'>{contador}</h2>
      <button className="rounded-full bg-blue-500 w-40 h-10 shadow-md text-white text-lg font-semibold mt-20" onClick={()=>handleIncrement(contador)}>
        Incrementar
      </button>
    </div>
    </>
  );
}

export default Contador;
