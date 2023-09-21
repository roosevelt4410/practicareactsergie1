import { useState } from 'react';

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial);

    const incrementar = (valor:number) => {
      setContador(contador + valor);
    };
  
    const resetear = (valor:number) => {
      setContador(valor);
    };
  
    const decrementar = (valor:number) => {
      setContador(contador - valor);
    };

  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}
