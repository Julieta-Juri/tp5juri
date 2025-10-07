import { Link } from 'react-router-dom';
import Weather from './Weather';
import '../estilos/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">App Lenguajes</h2>
      <div className="navbar-links">
        <Link to="/contacto" className="nav-link">Contacto</Link>
        <Link to="/upload" className="nav-link">Upload</Link>
        <Link to="/servicios" className="nav-link">Servicios</Link>
        <Link to="/Weather" className="nav-link">API-Clima</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;