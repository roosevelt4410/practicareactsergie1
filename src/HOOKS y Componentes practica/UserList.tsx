import React from "react";
import { useFetchData } from "./useFetchData"; 

interface UserListProps {
  endpoint: string;
}

const UserList: React.FC<UserListProps> = ({ endpoint }) => {
  
  const { data, isLoading } = useFetchData(endpoint);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          data.map((item:any) => (
            <li key={item.id}>
              {endpoint === 'user' ? item.name : item.body}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserList;





