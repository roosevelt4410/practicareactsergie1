import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserApp } from './HOOKS y Componentes practica/UserApp';
/* import Map from './HOOKS y Componentes practica/map'; */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-blue-900 min-h-screen"> 
      <UserApp />
    </div>
  </React.StrictMode>
);
