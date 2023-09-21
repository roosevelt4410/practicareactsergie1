import { useState, useEffect } from 'react';
import {UserContext} from './UserContext';

const usuario = {
  nombre: 'Andres Riobo',
  tecnología: 'React',
  mail: 'riobo4410@hotmail.com',
  redes: 'andresr4410',
};

export const UserProvider = ({ children }:any) => {

  const [usuarioActual, setUsuario] = useState({});

  useEffect(() => {
    console.log(usuarioActual);
  }, [usuarioActual])
  

  return (
    <UserContext.Provider value={{ usuario,setUsuario}}>
      {children}
    </UserContext.Provider>
  );
};
