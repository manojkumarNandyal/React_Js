import React from 'react';
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">${car.price} / day</p>
        <Link to={`/car/${car.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default CarCard;
