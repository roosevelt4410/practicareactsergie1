import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">React router dom</div>
          <ul className="flex space-x-4">
            <li className='nav-item'>
              <NavLink to='/' className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">Inicio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">Acerca de</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/home' className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">Contacto</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

  