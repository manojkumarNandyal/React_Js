import React from 'react';
import CarCard from './CarCard';

function CarList({ cars }) {
  return (
    <div className="row">
      {cars.map((car) => (
        <div key={car.id} className="col-md-4">
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}

export default CarList;
