interface Tema {
  nombre: string;
  visto: boolean;
}

const Items = ({nombre,visto}:Tema) =>{
    return(
        <li className="text-white mt-5">{nombre} {visto?'✅':'❌'}</li>
    )
}

export const CondicionalTernario = () => {
  return (
    <>
      <h1 className="text-bold text-3xl text-center text-orange-600">Listado de temas del curso</h1>
      <ol>
        <Items nombre="Instalaciones necesarias" visto={true} ></Items>
        <Items nombre="Uso de Vite" visto={true} ></Items>
        <Items nombre="Componentes" visto={true} ></Items>
        <Items nombre="Variables JSX" visto={true} ></Items>
        <Items nombre="Propos" visto={true} ></Items>
        <Items nombre="Eventos" visto={true} ></Items>
        <Items nombre="UseState" visto={true} ></Items>
        <Items nombre="Redux" visto={false} ></Items>
        <Items nombre="CustomHooks" visto={false} ></Items>
      </ol>
    </>
  )
}


export default CondicionalTernario;