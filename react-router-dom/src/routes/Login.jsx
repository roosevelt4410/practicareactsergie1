import { useContext } from 'react';
import { useForm } from '../Hooks/useForm';
import { UserContext } from '../Context/UserContext';

export const Login = () => {

    const initialForm ={
        nombre:'',
        tecnologia:'',
        email:'',
        redes:''
    }

    const {formState, nombre, tecnologia, email, redes,onInputChange} = useForm(initialForm);

    const {setUsuario} = useContext(UserContext);

    const onSubmit = (event) =>{
        event.preventDefault();
        setUsuario(formState);
    }

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Formulario Profesional</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tecnologia">
              Tecnología
            </label>
            <input
              type="text"
              id="tecnologia"
              name="tecnologia"
              value={tecnologia}
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="redes">
              Redes Sociales
            </label>
            <input
              type="text"
              id="redes"
              name="redes"
              value={redes}
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Registrar Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
