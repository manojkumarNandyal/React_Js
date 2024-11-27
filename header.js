import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand text-white">Car Rental</Link>
        <nav>
          <Link to="/" className="text-white mx-3">Home</Link>
          <Link to="/book" className="text-white mx-3">Book a Car</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
