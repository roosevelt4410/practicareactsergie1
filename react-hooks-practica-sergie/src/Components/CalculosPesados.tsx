import { useState, useMemo } from 'react';

const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 8, 5, 4, 6, 4, 6, 7, 5, 7, 5, 7, 5]);
  const [show, setShow] = useState(true);

  const getCalculo = useMemo(() => {
    console.log('Calculando');
    return listaNumeros.reduce((a: number, b: number) => a * b, 1);
  }, [listaNumeros]);

  const agregarNumero = () => {
    const ultimoNumero = listaNumeros[listaNumeros.length - 1] + 1;
    setListaNumeros([...listaNumeros, ultimoNumero]);
  };

  return (
    <>
      <h2>Calculo:</h2>
      <p>{getCalculo}</p>
      <button className='btm btn-primary' onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
      <button className='btm btn-warning' onClick={() => agregarNumero()}>Agregar número</button>
    </>
  );
};

export default CalculosPesados;


