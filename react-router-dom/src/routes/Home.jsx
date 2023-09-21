import { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

export const Home = () => {

  const {usuario} = useContext(UserContext);

  console.log(usuario);

  return (
    <div>Home</div>
  )
}
