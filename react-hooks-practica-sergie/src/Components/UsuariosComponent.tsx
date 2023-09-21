import { useFetch } from "../hooks/useFetch";




export const UsuariosComponent = () => {
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h1>Lista de usuarios</h1>
      {isLoading ? (
        <h4>cargando...</h4>
      ) : errors ? (
        <p>Ha ocurrido algún error cargando la API: {errors}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">WebSite</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user: any) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsuariosComponent;


