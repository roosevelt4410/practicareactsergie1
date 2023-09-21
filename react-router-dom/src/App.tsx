import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/Navbar';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { UserProvider } from './Context/UserProvider';
import Login from './routes/Login';

const NotFound = () => {
  return <div>Página no encontrada</div>;
};

export const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};


