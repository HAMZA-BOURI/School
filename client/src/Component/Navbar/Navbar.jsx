import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side routing
import './Navbar.css';
import loginIcon from './login.png'; // Adjust the path as neededs


export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav>
        <ul className="navbar-menu">
          <li className="nav-item">
            <Link to="/livre-de-paie" className="nav-link">LIVRE DE PAIE</Link>
          </li>
          <li className="nav-item">
            <Link to="/registre-des-conges-payes" className="nav-link">REGISTRE DES CONGES PAYES</Link>
          </li>
          <li className="nav-item">
            <Link to="/Liste" className="nav-link">LISTE</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <img src={loginIcon} alt="Login" className="login-icon" />
              <span className="sr-only">CONNEXION</span> {/* Screen reader only text */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
